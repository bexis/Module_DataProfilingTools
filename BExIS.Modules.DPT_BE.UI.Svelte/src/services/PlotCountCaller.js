import { Api } from '@bexis2/bexis2-core-ui';
import { setApiConfig } from '@bexis2/bexis2-core-ui';

export const countPlots = async (plots) => {
  
    setApiConfig('http://localhost:44345/', 'epetzold', '2021.B2.Go$On');
    let data = {
      plots: plots
      };
  
      try {
        console.log("plots:",data);
        const response = await Api.post('/api/DPT_BE/CountPlots', data);
        console.log("result:", response.data)
        return response.data;
      } catch (error) {
        console.log(error);
      }
  };
