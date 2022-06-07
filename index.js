fetch('https://sdm4321.herokuapp.com/data')
  .then(response => response.json())
  .then(json =>{
    MainContainer = document.getElementById('MainContainer');
    console.log(json.food);
    var OG = `<div class="team-thumb wow fadeInUp" data-wow-delay="0.2s">
    <img src="[img]" class="img-responsive" alt="">
         <div class="team-hover">
              <div class="team-item">
                   <h4>[info]</h4> 
                   <ul class="social-icon">
                        <li><a href="#" class="fa fa-linkedin-square"></a></li>
                        <li><a href="#" class="fa fa-envelope-o"></a></li>
                   </ul>
              </div>
         </div>
</div>
<div class="team-info">
    <h3>[name]</h3>
    <p>[job]</p>
</div>`;
      json.food.forEach(element => {
          var CC=OG;
          CC = CC.replace('[img]',element["C"]);
          CC = CC.replace('[name]',element["A"]);
          CC = CC.replace('[job]',element["B"]);
          CC = CC.replace('[info]',element["D"]);
          var div = document.createElement('div');
          div.className = 'col-md-4 col-sm-4';
          div.innerHTML=CC;
          MainContainer.appendChild(div);
      });
  } 
    )