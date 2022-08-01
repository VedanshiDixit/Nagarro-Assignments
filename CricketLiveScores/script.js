const main = document.querySelector("#main");
const head = document.querySelector("#head");
const url = "https://api.cricapi.com/v1/currentMatches?apikey=5263f7e5-c639-41b3-a6aa-9a6eb8b4dd0a&offset=0";

head.innerHTML = `<div class="card text-center d-flex align-self-start mt-5">
                    <div class="card-body">
                        <h3 class="card-title text-primary font-weight-bold">Live Cricket Scores</h3>
                    </div>
                </div>`;
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const matches = data.data;
    for (let i = 0; i < matches.length; i++) {
      const match = matches[i];
      main.innerHTML += `
                            <div class="card border-0 overflow-hidden" id="card">
                                        <div class="h-30 p-2 d-flex justify-content-center align-items-center">
                                            <h4><img src=${match.teamInfo[0].img}> ${match.teamInfo[0].shortname}  
                                                    vs ${match.teamInfo[1].shortname} <img src=${match.teamInfo[1].img}></h4>
                                        </div>
                                         
                                        <div class="p-2 d-flex flex-column" id="content">
                                            <div class="p-2 d-flex flex-column">
                                                <h6 class="text-center"style="font-size:0.8rem;">${match.venue}</h6>
                                                <h6 class="text-center" style="font-size:0.7rem;">${match.date}</h6>
                                                <h6 class="text-center" style="font-size:1.1rem;">${match.status}</h6>
                                            </div>
                                            
                                            <div class="p-2 d-flex flex-column mt-3">
                                                <h6 style="font-size:1rem;" class="text-primary">${match.teamInfo[0].name}</h6>
                                                <div id="score" class="d-flex justify-content-between">
                                                    <h6 style="font-size:0.8rem;">Score: ${match.score[0].r}/${match.score[0].w}</h6>
                                                    <h6 style="font-size:0.8rem;">Over: ${match.score[0].o}</h6>
                                                </div>
                                                <br>
                                                <h6 style="font-size:1rem;" class="text-primary">${match.teamInfo[1].name}</h6>
                                                <div id="score" class="d-flex justify-content-between">
                                                    <h6 style="font-size:0.8rem;">Score: ${match.score[1].r}/${match.score[1].w}</h6>
                                                    <h6 style="font-size:0.8rem;">Over: ${match.score[1].o}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
    }
  });
