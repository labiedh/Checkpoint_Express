const express= require('express')
const app=express()
app.set('view engine', 'pug');
app.set('views','./views');

let ladate=new Date();

app.use(function (req, res, next) {
    if ((ladate.getDay()!=0 && ladate.getDay()!=6 )&&(ladate.getHours()<18 && ladate.getHours()>8) ) {
        next();
      } else {
        res.send(401, "L'application web n'est disponible que pendant les heures ouvrables (du lundi au vendredi, de 9 à 17).   "+ heure);
      }
    next();
  });

app.get('/', function(req, res){
    res.render('Homepage');
});
app.get('/Contact', function(req, res){
    res.render('Contact');
});
app.get('/Service', function(req, res){
    res.render('Services');
});
app.listen(3000)