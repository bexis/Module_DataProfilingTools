<script>
	// import {countPlots} from './services/Caller';
	// import { setApiConfig }  from '@bexis2/svelte-bexis2-core-ui';
	import { onMount,  } from 'svelte';
	import { Spinner } from 'sveltestrap';

	let files;
	let plotsid = [];
	let result;
	let fileUpload = false;
	let header = false;
	let run = false;
	let fileError = "";

	export const HostURL = '/api/DPT_BE/CountPlots';


	onMount(async () => {
  		//console.log("start edit");
  		//setApiConfig("https://localhost:44345","","");
	})

	// Fetch data from API and return as JSON object
	async function getData (url, plots) {

		let data = {
    	plots: plots
    		};

		console.log(data);
		const res = await fetch(url, {
			method: 'POST',
			headers: {
			'content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})

    	let result = await res.json();
   		return result;
	}	

	let textareaPlots ="";

	const handleSubmit = () => {

		readFile(files[0]);

	}

	async function count()
	{
		run = true;
		result="";
		
		//if header remove first line
		if(header)
		{
			var lines = textareaPlots.split('\n');
			lines.filter(line => line.trim() !== '');
			lines.splice(0,1);
			let newText = lines.join('\n');
			plotsid = newText.split(/[\r\n,\t\s;]+/);

		}
		else
		{
			plotsid = textareaPlots.split(/[\r\n,\t\s;]+/).filter(line => line.trim() !== '');
		}
		//send to bexis textareaPlots
		const respone = await getData(HostURL, plotsid);
		console.log(respone);
		result = respone;
		
	}

	function clear()
	{
		textareaPlots = "";
		result ="";
		run = false;

	}

	function readFile(file)
	{
		if(file.type == "text/plain" || file.type == "text/csv")
		{
		fileError = "";
		const reader = new FileReader();
		const input = file;
		let json;

		reader.readAsText(input);

		reader.onload = function (e) {
		//debugger;	
        const text = e.target.result;
		console.log("text",text);
		textareaPlots = text

      };
	}
	else
	{
		fileError = "File format is not supported. Please use .txt or .csv.";
	}

	}
</script>


<main>

	<div class="container">

	<div class="boxOuter">

	<p class="dtm-para_green">Count and check plot IDs
	</p>
	<p class="text">Enter plot IDs or upload a file. Allowed separators: comma, semicolon, space characters and enter. Also in combination.</p>
	<div class="boxLeft"><b>Plots:</b><br>
	<textarea  bind:value={textareaPlots}></textarea><br>
		

	<input type="checkbox" bind:checked={fileUpload}/> <b>File upload (.csv, .txt)</b>
	
	</div>
	{#if fileUpload == true}
	<div class="boxLeft">
		<input type="checkbox" bind:checked={header}/> File header exist
		<form on:submit|preventDefault={handleSubmit}>
			<input type="file" bind:files><br>
			<input type="submit" value="Submit" class="bx-button small function"/> <p style="color: red; width: 400px;">{fileError}</p>
		</form>
		</div>	{/if}
	
	<hr class="dtm-para_green"/>
	<div class="buttonList">
	{#if textareaPlots}
		<button class="bx-button small function" on:click={count}>
			Run
		</button>
		<button class="bx-button small function" on:click={clear}>
		Clear
		</button>	
	{:else}
		<button class="bx-button small function bx-disabled" on:click={count}>
			Run
		</button>
		<button class="bx-button small function bx-disabled" on:click={clear}>
		Clear
		</button>		
	{/if}
	<br>
	<p class="errors"></p>
	</div>
	</div>


	{#if result}

	<div class="boxOuter" id="results">
	
	<p class="dtm-para_green">Result</p>
	<ul>
		<li><b>Number of plots</b></li>
	{#each result.PlotProfiling.PlotTypeCounters as item, i}
	
		<p class="resultList"><b>Number of {item.PlotType}:</b> {item.Number}</p>

	{/each}
	<li><b>Joint Experiment 2020</b>	</li>
		<p class="resultList"><b>Forest:</b> {#if result.PlotProfiling.JointExperimentForest == true}
			 yes
		{:else}
			 no
		{/if}
			
		</p>
		<p class="resultList"><b>Grassland:</b> {#if result.PlotProfiling.JointExperimentGrld == true}
			 yes
		{:else}
			 no
		{/if}
		</p>

	
	<li><b>Further details</b></li>
	<p class="resultList"><b>Number of entered plots:</b> {result.NumberOfAllPlots}</p>
	<p class="resultList"><b>Number of duplicate plots:</b> {result.NumberOfDuplicates}</p>
	<p class="resultList-overflow"><b>Non-valid plots: </b>

	{#if result.NotVaildPlotIds.length > 0}

		{#each result.NotVaildPlotIds as item, i}
			{item}{#if i < (result.NotVaildPlotIds.length-1)},{/if}
	
			{/each}

	{:else}
			none

	{/if}
	</p>
	</ul>
	</div>

	{:else}
	
	{#if run == true}
		<div class="spinnerBox">
			<Spinner color="primary" size="sm" />
		</div>	
	{/if}
		
	{/if}

	
	
	</div>
</main>

<style>

	main {
		text-align: left;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	textarea { 
		width: 100%;
		height: 200px;

	}

	.container
	{
		display: flex;
		margin-left: 0;
	}

	.buttonList
	{
		padding-left: 20px;
		margin-top: 60px;
	}

	.text
	{
		padding-left: 20px;
		padding-right: 20px;
	}

	.boxLeft{
	 
     padding: 20px;
     background: #FFF;
	 /* width: 40%; */
	}

	.boxOuter {
     float: left;
	 width: 40%;
	 /* height: 550px; */
	 border-left: #388670 6px solid;
	 border-right: #388670 2px solid;
     border-bottom: #388670 2px solid;
     border-top: #388670 10px solid;
     margin-bottom: 1em;
	 margin-right: 1em;
	}

	 .spinnerBox
	 {
		float: left;
	 	width: 30%;
		margin-bottom: 1em;
	 	margin-right: 1em;
	 }


.dtm-para_green 
{
    background-color: #bbddd9;
    font-size: 14px;
    padding: 0.5em;
	margin-block-start: 0;
	border: 0;
}

.resultList
{
	margin-left: 100px;	
}

.resultList-overflow
{
	margin-left: 100px;
	margin-right: 100px;
	height:60px;
    overflow-y : scroll;

}

	@media (min-width: 640px) 
	{
		main {
			max-width: none;
		}
	}
</style>