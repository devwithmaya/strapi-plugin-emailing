

import axios from 'axios'

export const sendEmail = (email:string, subject:string, html:string) => {
    return new Promise(function (resolve, reject) {
        let data:any = JSON.stringify({
            "email": email,
            "subject": subject,
            "html": html,
          });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:1337/api/emailing',
            headers: {
                'Content-Type': 'application/json',
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