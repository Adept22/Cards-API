function Cards() {
  Cards.prototype.XMLToArray = function (xml) {
      var xmlDoc;
      if (window.DOMParser)
          xmlDoc = (new window.DOMParser()).parseFromString(xml, "text/xml");
      else if (typeof window.ActiveXObject != "undefined" && new window.ActiveXObject("Microsoft.XMLDOM")) {
          xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
          xmlDoc.async = "false";
          xmlDoc.loadXML(xml);
      }
      var cards = xmlDoc.getElementsByTagName("card");
      var array = [];
      for(var i = 0; i < cards.length; i++) {
          array[i] = {};
          for (var j = 0; j < cards[i].childNodes.length; j++) {
              array[i][cards[i].childNodes[j].nodeName] = cards[i].childNodes[j].textContent;
          }
      }
      return array;
  };
  
  Cards.prototype.JSONToArray = function (json) {
      return JSON.parse(json);
  };
  
  Cards.prototype.AddToArray = function (type, flight_number_or_route, from, to, gate, seat, baggage) {
      var card = {
          "type": type,
          "flight_number_or_route": flight_number_or_route,
          "from": from,
          "to": to,
          "gate": gate,
          "seat": seat,
          "baggage": baggage
      };
      return card;
  };
  
  Cards.prototype.GetSorted = function (cardsArray) {
      var sortedcards = [];
      for (var i = 0; i < cardsArray.length; i++)
          for (var j = 0; j < cardsArray.length; j++)
              if (cardsArray[j]['to'] === cardsArray[i]["from"])
                  sortedcards.push(cardsArray[j]);
      while (true) {
          var next = false;
          for (var i = 0; i < cardsArray.length; i++)
              if (cardsArray[i]['from'] === sortedcards[sortedcards.length - 1]['to'])
                  next = cardsArray[i];
              else
                  next = false;
          if (!next) break;
          sortedcards.push(next);
      }
      return sortedcards;
  };
  
  Cards.prototype.Result = function (sortedCards) {
      var result = "";
      for (var i = 0; i < sortedCards.length; i++) {
          var type = "Type: " + sortedCards[i]["type"] + "\n";
          var flight_number_or_route = ((sortedCards[i]["flight_number_or_route"] != "") ? "Flight number, or Route: " + sortedCards[i]["flight_number_or_route"] + "\n" : "");
          var from = "From: " + sortedCards[i]["from"] + "\n";
          var to = "To: " + sortedCards[i]["to"] + "\n";
          var gate = (sortedCards[i]["gate"] != "" ? "Gate: " + sortedCards[i]["gate"] + "\n" : "");
          var seat = (sortedCards[i]["seat"] != "" ? "Seat: " + sortedCards[i]["seat"] + "\n" : "");
          var baggage = (sortedCards[i]["baggage"] != "" ? "Baggage: " + sortedCards[i]["baggage"] + "\n" : "");
          result += type + flight_number_or_route + from + to + gate + seat + baggage + "\n";
      }
      return result;
  };
}
