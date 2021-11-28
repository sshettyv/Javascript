console.log('about to fet a rainbow');
/* fetch('rainbow.jpg')
    .then(response => {
                        console.log(response); 
                        return response.blob();})
    .then(response => {
                        console.log(response);
                        console.log(URL.createObjectURL(response));

                        document.getElementById('rainbow').src =URL.createObjectURL(response);    })
    .catch(err => console.log(err));                    
 */
    catchRainbow().catch(err => console.log(err) );  
async function catchRainbow(){

    const responseImg = await fetch('rainbow.jpg');
    const blob = await responseImg.blob();
    document.getElementById('rainbow').src =URL.createObjectURL(blob);    

};

/* fetch('text.txt')
            .then(response =>  response.text())
            .then(text => {document.getElementById('text').innerHTML = text;} )
            .catch(err => console.log(err) );  
 */
fetchText().catch(err => console.log(err));
async function fetchText(){
    const responseTxt = await fetch('text.txt');
    const text = await responseTxt.text();
    document.getElementById('text').innerHTML = text;


}