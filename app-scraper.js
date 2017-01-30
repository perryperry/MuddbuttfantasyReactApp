var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var YAN_ID = 1;
var LYNCH_ID = 2;
var PERRY_ID = 3;
var LIPSKER_ID = 4;
var CHAM_ID = 5;
var FORREST_ID = 6;
var SCOTT_ID = 7;
var JOSH_ID = 8;
var ULRICH_ID = 9;
var WEST_ID = 10;



exports = module.exports = function(app) {
	app.get('/scoreboard', function(req, res) {

        url = 'http://games.espn.com/ffl/scoreboard?leagueId=1188261&scoringPeriodId=16';

        request(url, function(error, response, html){
        var objs = [];
        if(!error){
            var $ = cheerio.load(html);
            $('.matchup').each(function(i, elem) {
                var data = $(this);
                var score = data.children().first().find('.score').text();   
                var name = data.children().first().find('a').text();  
                var record= data.children().first().find('.record').text(); 
                var scoreOpp = data.children().next().find('.score').text();  
                var nameOpp = data.children().next().first().find('a').text();  
                var recordOpp = data.children().next().find('.record').text(); 

                objs[i] = { 
                            opponent1: {
                                name: name, record : record, score : score
                            },
                            opponent2: {
                                name: nameOpp, record : recordOpp, score : scoreOpp
                            }
                        };
            })
            objs.join(',');

            console.log("###########################");
            console.log(objs);
            console.log("###########################");
        }
        fs.writeFile('output.json', JSON.stringify(objs, null, 4), function(err){

            console.log('File successfully written! - Check your project directory for the output.json file');

        })

        // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
        res.send(objs);

        }) ;
    });

    app.get('/matchup', function(req, res) {
       var url2 = 'http://games.espn.com/ffl/boxscorequick?leagueId=1188261&teamId=5&scoringPeriodId=17&seasonId=2016&view=scoringperiod&version=quick';
       var payload = [];
       var test = '';
       var name = '';
       var ownerName='';
       var points ='';
       var slot ='';
       var team ='';

        request(url2, function(error, response, html) {
            if(!error) {
                var $ = cheerio.load(html);
                 var data = $(this);
                  $('.pncPlayerRow').each(function(i, elem) {
                        var data = $(this);
                        // Get the player name
                        name = data.find('.playertablePlayerName').find('a').text();
                        // Get player points
                        points = data.find('.appliedPoints').text();
                        // Get player position
                        slot = data.find('.playerSlot').text();

                        payload[i] = {
                            player: {
                                name: name,
                                points: points,
                                slot: slot,
                            }
                        };

                        console.log(payload[i].player.name + "\n");
                    })
                  payload.join(',');

                // $('.teamInfoOwnerData').each(function(i, elem) {
                //     var data = $(this);
                //     ownerName = data.text();
                //     console.log("owner: " + ownerName);
                // });
            }
            res.send(payload);
        });
         
    });
}