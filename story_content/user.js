function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6CBlp7jPeBX":
        Script1();
        break;
      case "5W0i8WUPNCR":
        Script2();
        break;
      case "6YyabGoBk5E":
        Script3();
        break;
      case "6eHGD4ErsNR":
        Script4();
        break;
      case "6ZfyyOJ9qs6":
        Script5();
        break;
      case "5qVeIhcvkGc":
        Script6();
        break;
      case "5vXJPCC1qG5":
        Script7();
        break;
      case "5pObnMiFn4E":
        Script8();
        break;
      case "64lRV5VkeVE":
        Script9();
        break;
      case "5rYZBUVlAiL":
        Script10();
        break;
      case "6BIF4sUXd8U":
        Script11();
        break;
      case "5sMVBSH1TYt":
        Script12();
        break;
      case "6r1dnasGT3e":
        Script13();
        break;
      case "6CJ0IGPYIng":
        Script14();
        break;
      case "5unWWgxlPwc":
        Script15();
        break;
      case "6gMXdvGzQKG":
        Script16();
        break;
      case "5mf3eiDlQEK":
        Script17();
        break;
      case "6NGoF9doJbO":
        Script18();
        break;
      case "6g3BjWpKZLK":
        Script19();
        break;
      case "5hqxgpBU3eu":
        Script20();
        break;
      case "5X8eXgBW4zt":
        Script21();
        break;
      case "6bJnOhPBCNM":
        Script22();
        break;
      case "6fjWxM5ATZh":
        Script23();
        break;
      case "5biZhrW9e9T":
        Script24();
        break;
      case "6jq1NM85uRr":
        Script25();
        break;
      case "5yyQZ5qhamB":
        Script26();
        break;
      case "6RBYJF8uCnR":
        Script27();
        break;
      case "65rd3KoEFsC":
        Script28();
        break;
      case "686mgsYv0li":
        Script29();
        break;
      case "5ZJ7cifZMR3":
        Script30();
        break;
      case "62IH9Yx0z2G":
        Script31();
        break;
      case "6bKJ6RtNCE5":
        Script32();
        break;
      case "68bbJlQ1n3O":
        Script33();
        break;
      case "5kGsuIIOwZS":
        Script34();
        break;
      case "5oMXKHKG78E":
        Script35();
        break;
      case "5rH9bMQ2Rpy":
        Script36();
        break;
      case "67Eh4kFASpr":
        Script37();
        break;
      case "6WcZvrgkT4v":
        Script38();
        break;
      case "61LcCRazU7x":
        Script39();
        break;
      case "6fwGBM8AcdF":
        Script40();
        break;
      case "5silwUilD9K":
        Script41();
        break;
      case "5bJltm3lIu8":
        Script42();
        break;
      case "5zQQMWy0gkK":
        Script43();
        break;
      case "6c2uJ2UlBYI":
        Script44();
        break;
      case "6ScIocU0GVj":
        Script45();
        break;
      case "6hWdBiX0s2e":
        Script46();
        break;
      case "6TyIyNB9Lhy":
        Script47();
        break;
      case "5grSULrO1NJ":
        Script48();
        break;
      case "6fQ4R576Lh4":
        Script49();
        break;
      case "6Abejr3eC7x":
        Script50();
        break;
      case "6NI5fg0GvYq":
        Script51();
        break;
      case "6p7WHJVH7sp":
        Script52();
        break;
      case "6PtxvcbiGSP":
        Script53();
        break;
      case "6ZME39jAxDM":
        Script54();
        break;
      case "5zOoTEocBDh":
        Script55();
        break;
      case "5i6ZAVrNsNj":
        Script56();
        break;
      case "6kXisTxmSKr":
        Script57();
        break;
      case "6FjWZ2xIwUw":
        Script58();
        break;
      case "6kuYDUwsn3o":
        Script59();
        break;
      case "5jTLjpMP71q":
        Script60();
        break;
      case "5iVh0kufp9s":
        Script61();
        break;
      case "618fMPLaetD":
        Script62();
        break;
      case "6ISM50RsvOp":
        Script63();
        break;
      case "60EMfmvPCst":
        Script64();
        break;
      case "6RnTU3vYj9h":
        Script65();
        break;
      case "6TdLWWIpiJM":
        Script66();
        break;
      case "6bp6Zfppm9y":
        Script67();
        break;
      case "5rflJ6YGZAj":
        Script68();
        break;
      case "6RYTwBvTyCq":
        Script69();
        break;
      case "62roDyYXvBW":
        Script70();
        break;
      case "5ysCtni8OwF":
        Script71();
        break;
      case "5u2qONnx2W6":
        Script72();
        break;
      case "6qLKqEmRuP6":
        Script73();
        break;
      case "5zfpLxykIPm":
        Script74();
        break;
      case "5gt0u3RXOn7":
        Script75();
        break;
      case "5y5xAH989Pm":
        Script76();
        break;
      case "6709umTwUnx":
        Script77();
        break;
  }
}

function Script1()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script2()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script3()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script4()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script5()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script6()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script7()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script8()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script9()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script10()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script11()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script12()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script13()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script14()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script15()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script16()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script17()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script18()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script19()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script20()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script21()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script22()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script23()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script24()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script25()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script26()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script27()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script28()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script29()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script30()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script31()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script32()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script33()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script34()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script35()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script36()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script37()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script38()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script39()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script40()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script41()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script42()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script43()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script44()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script45()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script46()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script47()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script48()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script49()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script50()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script51()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script52()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script53()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script54()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script55()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script56()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script57()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script58()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script59()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script60()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script61()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script62()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script63()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script64()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script65()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script66()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script67()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script68()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script69()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script70()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script71()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script72()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script73()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script74()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script75()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script76()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

function Script77()
{
  var appState = require("helpers/appState");
var player = GetPlayer();
        if (player.GetVar("au_status") == true) {
            appState.currentVolume(0); //mute
        } else {
            appState.currentVolume(1); //unmute
        }
}

