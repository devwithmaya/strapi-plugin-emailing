import axios from 'axios'

export const getEmailingTraces = () => {
    return new Promise(function (resolve, reject) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:1337/api/emailing-traces?sort[0]=id%3Adesc',
            headers: {
                'Authorization': 'Bearer d50629f9fbb6756a2ddb75b667cdfa844125ddc912960b7e235e8163b6a8c5c4aa463faff74336ce715832fe9b05b506500f4d9d56c7564bd6b59c9e5f344a3ca7c0e77e56e452edd514de278d8bb8c38584b9b1738da1a2c3770b03b36a05479183bc9ac2cd140147a6a88c63de32ad6a54d4a1a103910bbbd00c97164b8470'
            }
        };

        axios.request(config)
            .then((response:any) => {
                resolve(response.data.data);
            })
            .catch((error:any) => {
                reject(error);
            });
    })
}

export const postEmailingTraces = (email:string, statue:any) => {
    return new Promise(function (resolve, reject) {
        let data:any = JSON.stringify({
            "data": {
              "email": email,
              "sent": statue
            }
          });
          
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:1337/api/emailing-traces/',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios.request(config)
            .then((response:any) => {
                resolve(response.data);
            })
            .catch((error:any) => {
                reject(error);
            });
    })
}

