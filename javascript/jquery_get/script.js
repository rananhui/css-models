$(document).ready(function(){
  $("button").click(function(){
    $.get("https://image-server-codesmith.firebaseapp.com/images/", function(data, status){
    //   alert("Data: " + data + "\nStatus: " + status);
        console.log(`data[0] = ${data[0]}`);
        console.log(`data[1] = ${data[1]}`);
        $('p').append(getListOfData(data).filterHttp());
    });
  });
});


const getListOfData = (data) => {
    const urls = data.filter((currVal) => `<li>${currVal}</li>`).join("\n");
    return `<ul>${urls}</ul>`;
};

const filterHttp = url => url.includes("http:");