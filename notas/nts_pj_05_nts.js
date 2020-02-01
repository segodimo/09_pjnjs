
curl -H 'Content-Type: application/json' -X POST -d '{"username":"usuario_a", "pass":"1234567"}' http://192.168.1.102:4000/api/lem

curl -H 'Content-Type: application/json' -X POST -d'{"id_us":"5d3b56a10e16230a9e914085", "tit":"Lembrete_1", "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore minus dignissimos, aspernatur earum officia.", "date":"2019-09-26T19:38:09.467Z", "stat":"True"}' http://192.168.1.102:4000/api/lem


id_us, tit, desc, date, stat

id_us, tipo, prod, val, obs, date, id_lem, stat

curl -H 'Content-Type: application/json' -X POST -d'{"id_us":"5d3b56a10e16230a9e914085", "tipo":"compra", "prod":"zapatos", "val":"280", "obs":"Uma observação", "date":"2019-07-26T19:40:56.218Z", "id_lem":"5d3c4211c0b1640feed1f3df", "stat":"true"}' http://192.168.1.102:4000/api/val


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

[
{
	"_id":"5d3b56a10e16230a9e914085",
	"username":"KKKKKKKK",
	"pass":"KKKKKKKK",
	"createdAt":"2019-07-26T19:38:09.467Z",
	"updatedAt":"2019-07-26T20:57:28.924Z",
	"__v"
:0},
{
	"_id":"5d3b570b305a930ab449c36f",
	"username":"usuario_b",
	"pass":"2234567",
	"createdAt":"2019-07-26T19:39:55.190Z",
	"updatedAt":"2019-07-26T19:39:55.190Z",
	"__v"
:0},
{
	"_id":"5d3b5748305a930ab449c370",
	"username":"usuario_c",
	"pass":"3234567",
	"createdAt":"2019-07-26T19:40:56.072Z",
	"updatedAt":"2019-07-26T19:40:56.072Z",
	"__v"
:0},
{
	"_id":"5d3b5748305a930ab449c372",
	"username":"usuario_e",
	"pass":"5234567",
	"createdAt":"2019-07-26T19:40:56.128Z",
	"updatedAt":"2019-07-26T19:40:56.128Z",
	"__v"
:0},
{
	"_id":"5d3b5748305a930ab449c373",
	"username":"usuario_f",
	"pass":"6234567",
	"createdAt":"2019-07-26T19:40:56.157Z",
	"updatedAt":"2019-07-26T19:40:56.157Z",
	"__v"
:0},
{
	"_id":"5d3b5748305a930ab449c374",
	"username":"usuario_g",
	"pass":"7234567",
	"createdAt":"2019-07-26T19:40:56.188Z",
	"updatedAt":"2019-07-26T19:40:56.188Z",
	"__v"
:0},
{
	"_id":"5d3b5748305a930ab449c375",
	"username":"TTTT",
	"pass":"RRRRRR",
	"createdAt":"2019-07-26T19:40:56.218Z",
	"updatedAt":"2019-07-26T21:04:26.514Z",
	"__v":0}]