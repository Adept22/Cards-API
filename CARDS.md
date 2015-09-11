# Cards API

JavaScript API - реализующий сортировку карточек путешественника.

## Установка

Добавить cards.js к проекту:
```html
  <script src="cards.js"></script>
```
## Документация

### Cards

Основной объект Cards API состоящий из нескольких методов для работы с данным API.

Какой тип данных не использовался бы, всегда набор полей один:
<table>
  <tr><td>Поле</td><td>Значение</td></tr>
  <tr>
    <td>
      type
    </td>
    <td>
      Строка, обязательное поле
    </td>
  </tr>
  <tr>
    <td>
      flight_number_or_route
    </td>
    <td>
      Строка, может быть пустой
    </td>
  </tr>
  <tr>
    <td>
      from
    </td>
    <td>
      Строка, обязательное поле
    </td>
  </tr>
  <tr>
    <td>
      to
    </td>
    <td>
      Строка, обязательное поле
    </td>
  </tr>
  <tr>
    <td>
      gate
    </td>
    <td>
      Строка, может быть пустой
    </td>
  </tr>
  <tr>
    <td>
      seat
    </td>
    <td>
      Строка, может быть пустой
    </td>
  </tr>
  <tr>
    <td>
      baggage
    </td>
    <td>
      Строка, может быть пустой
    </td>
  </tr>
</table>

### Методы Cards

#### Cards.XMLToArray

Данный метод принимает на вход текст xml и возвращает массив объектов.</br>
#####Пример xml:
```xml
<cards>
	<card>
		<type>airport bus</type>
		<flight_number_or_route></flight_number_or_route>
		<from>Barcelona</from>
		<to>Gerona Airport</to>
		<gate></gate>
		<seat></seat>
		<baggage></baggage>
	</card>
	<card>
		<type>train</type>
		<flight_number_or_route>78A</flight_number_or_route>
		<from>Madrid</from>
		<to>Barcelona</to>
		<gate></gate>
		<seat>45B</seat>
		<baggage></baggage>
	</card>
	<card>
		<type>flight</type>
		<flight_number_or_route>SK455</flight_number_or_route>
		<from>Gerona Airport</from>
		<to>Stockholm</to>
		<gate>45B</gate>
		<seat>3A</seat>
		<baggage>344</baggage>
	</card>
	<card>
		<type>flight</type>
		<flight_number_or_route>SK22</flight_number_or_route>
		<from>Stockholm</from>
		<to>New York JFK</to>
		<gate>22</gate>
		<seat>7B</seat>
		<baggage></baggage>
	</card>
</cards>
```
##### Пример вызова метода:
```js
var xml = "<cards><card>...</card>...</cards>";
var cards_array = Cards.XMLToArray(xml);
```

#### Cards.JSONToArray

Данный метод принимает на вход текст JSON и возвращает массив объектов.</br>
#####Пример JSON:
```json
[{
	"type": "train",
	"flight_number_or_route": "78A",
	"from": "Madrid",
	"to": "Barcelona",
	"gate": "",
	"seat": "45B",
	"baggage": ""
},
{
	"type": "airport bus",
	"flight_number_or_route": "",
	"from": "Barcelona",
	"to": "Gerona Airport",
	"gate": "",
	"seat": "",
	"baggage": ""
},
{
	"type": "flight",
	"flight_number_or_route": "SK455",
	"from": "Gerona Airport",
	"to": "Stockholm",
	"gate": "45B",
	"seat": "3A",
	"baggage": "344"
},
{
	"type": "flight",
	"flight_number_or_route": "SK22",
	"from": "Stockholm",
	"to": "New York JFK",
	"gate": "22",
	"seat": "7B",
	"baggage": "Baggage will be automatically transferred from your last leg."
}]
```
##### Пример вызова метода:
```js
var json = '[{"type": "train",...},{...},...]';
var cards_array = Cards.JSONToArray(json);
```

#### Cards.AddToArray

Данный метод принимает на вход переменные: type, flight_number_or_route, from, to, gate, seat, baggage, и возвращает объект.</br>
##### Пример вызова метода:
```js
var type = "airport bus";
var flight_number_or_route = "";
var from = "Barcelona";
var to = "Gerona Airport";
var gate = "";
var seat = "";
var baggage = "";
var cards_array = [];
cards_array.push(Cards.AddToArray(type, flight_number_or_route, from, to, gate, seat, baggage));
```

#### Cards.GetSorted
Данный метод принимает на вход массив объектов и возвращает отсортированный массив объектов.</br>
##### Пример вызова метода:
```js
var xml = "<cards><card>...</card>...</cards>"; // Входной формат может быть XML, JSON или добавление через метод Cards.AddToArray
var nonsorted_array = Cards.XMLToArray(xml); // Метод обработки каточек зависит от типа входных данных
var sorted_array = Cards.GetSorted(nonsorted_array);
```

#### Cards.Result
Данный метод принимает на вход массив объектов и возвращает отсортированный массив объектов.</br>
##### Пример вызова метода:
```js
var xml = "<cards><card>...</card>...</cards>"; // Входной формат может быть XML, JSON или добавление через метод Cards.AddToArray
var nonsorted_array = Cards.XMLToArray(xml); // Метод обработки каточек зависит от типа входных данных
var sorted_array = Cards.GetSorted(nonsorted_array);
var result = Cards.Result(sorted_array); // Данный метод может принять не отсортированный массив и вернуть не отсортированный результат.
```
Значение переменной ```result``` после выполнения метода с остортированным массивом и форматом XML из ```Cards.XMLToArray()```:
```
Type: train
Flight number, or Route: 78A
From: Madrid
To: Barcelona
Seat: 45B

Type: airport bus
From: Barcelona
To: Gerona Airport

Type: flight
Flight number, or Route: SK455
From: Gerona Airport
To: Stockholm
Gate: 45B
Seat: 3A
Baggage: 344

Type: flight
Flight number, or Route: SK22
From: Stockholm
To: New York JFK
Gate: 22
Seat: 7B
```
