(this["webpackJsonpweather-api"]=this["webpackJsonpweather-api"]||[]).push([[0],{31:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(25),s=n.n(a),r=n(11),i=(n(31),n(2)),l=n(15),o=n(6),d=n.n(o),u=n(9),m=n(4),j=n(7),b=n.n(j),f=n(0),h=Object(c.createContext)(),x=function(e){var t=e.children,n=Object(c.useState)(null),a=Object(m.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(null),o=Object(m.a)(i,2),j=o[0],x=o[1],p=Object(c.useState)({state:!1,msg:null}),g=Object(m.a)(p,2),O=g[0],v=g[1],w=function(){var e=Object(u.a)(d.a.mark((function e(t,n){var c,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=+t.toFixed(2),a=+n.toFixed(2),e.next=4,b.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(c,"&lon=").concat(a,"&appid=").concat("5824cef04bb350250a37f8b214365025","&units=metric"));case 4:s=e.sent,x({currentWeather:s.data});case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n,c,a,s,i,l,o,u,m,j,f,h,x;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://geolocation-db.com/json/");case 2:return t=e.sent,n=t.data.IPv4,e.next=6,b.a.get("https://ipgeolocation.abstractapi.com/v1/?api_key=".concat("c4c5e56dcf2948789d5cd57e88d80542","&ip_address=").concat(n));case 6:c=e.sent,a=c.data,s=a.city,i=a.continent,l=a.continent_code,o=a.country,u=a.country_code,m=a.flag,j=a.latitude,f=a.longitude,h=a.region,x=a.timezone,r({city:s,continent:i,continent_code:l,country:o,country_code:u,flag:m,latitude:j,longitude:f,region:h,timezone:x}),w(j,f);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){y()}),[]);var N=function(){var e=Object(u.a)(d.a.mark((function e(t){var n,c,a,s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.coord,c=n.lon,a=n.lat,e.next=3,b.a.get("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(a,"&lon=").concat(c,"&cnt=",9,"&appid=").concat("5824cef04bb350250a37f8b214365025","&units=metric"));case 3:return s=e.sent,e.next=6,b.a.get("https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=".concat(a,"&lon=").concat(c,"&appid=").concat("5824cef04bb350250a37f8b214365025","&units=metric"));case 6:r=e.sent,x(Object(l.a)(Object(l.a)({},j),{},{forecast:s.data,airPollution:r.data}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){(null===j||void 0===j?void 0:j.currentWeather.message)||void 0===(null===j||void 0===j?void 0:j.currentWeather)||N(j.currentWeather)}),[null===j||void 0===j?void 0:j.currentWeather]);var F={dataFromIP:s,weather:j,handleWeather:function(e){return x(e)},locationByGps:function(e){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords;v(!1),console.log("Your current position is:"),console.log("Latitude : ".concat(t.latitude)),console.log("Longitude: ".concat(t.longitude)),w(t.latitude,t.longitude)}),(function(e){console.log(e),console.warn("ERROR(".concat(e.code,"): ").concat(e.message)),v({state:!0,msg:e.message})}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},gpsError:O};return Object(f.jsx)(h.Provider,{value:F,children:t})},p=h,g=n.p+"static/media/magnifying-glass.3f89d579.svg",O=function(e){var t=e.handleCity,n=e.handleFetch;return Object(f.jsxs)("form",{action:"",className:"w-8/12 desktop:w-2/5 h-8",onSubmit:function(e){return n(e)},children:[Object(f.jsx)("input",{type:"text",placeholder:"City Name",onChange:function(e){var n=e.target;return t(n)},className:"w-8/12 px-4 py-1 outline-none rounded-l-full"}),Object(f.jsxs)("div",{className:" inline-flex items-center justify-center w-4/12 px-4 py-1 outline-none bg-gray-200 rounded-r-full",children:[Object(f.jsx)("input",{type:"submit",value:"Search",className:"outline-none mr-1 bg-transparent"}),Object(f.jsx)("img",{className:"w-4",src:g,alt:""})]})]})},v=n(26),w=n.p+"static/media/speed.ca7debe4.svg",y=n.p+"static/media/arrow.0733ddb9.svg",N=["currentWeather","forecast","airPollution","min"],F=function(e){var t=e.currentWeather,n=e.forecast,a=(e.airPollution,e.min),s=void 0!==a&&a,r=(Object(v.a)(e,N),Object(i.f)()),l=(Object(c.useContext)(p).weather,function(){return Object(f.jsx)("div",{className:"forecast w-full flex flex-row py-2 overflow-y-hidden overflow-x-visible rounded-md glass",children:null===n||void 0===n?void 0:n.list.map((function(e,t){var n=new Date(1e3*e.dt),c=function(e){return String(e).padStart(2,"0")};return Object(f.jsxs)("div",{className:"forecast_item flex flex-col items-center px-1",children:[Object(f.jsxs)("p",{className:" text-center",children:[c(n.getHours()),":",c(n.getMinutes())]}),Object(f.jsxs)("div",{className:"flex flex-col items-center",children:[Object(f.jsx)("p",{className:"min-w-max  font-bold text-center capitalize",children:e.weather[0].description}),Object(f.jsx)("img",{className:" w-14",src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:e.weather[0].main})]}),Object(f.jsxs)("p",{className:"",children:["Humidity:",Object(f.jsxs)("b",{children:[e.main.humidity,"%"]})]}),Object(f.jsxs)("div",{className:"flex flex-col items-center overflow-hidden rounded-xl text-center",children:[Object(f.jsxs)("p",{className:"w-full p-2 bg-red-400 font-bold",children:[e.main.temp_max,"\xb0"]}),Object(f.jsxs)("p",{className:"w-full p-2 bg-blue-400 font-bold",children:[e.main.temp_min,"\xb0"]})]})]},t)}))})});return Object(f.jsxs)("div",{className:"relative self-center desktop:min-w-min mobile:w-9/12 flex flex-col items-center rounded-lg p-3 my-auto text-xs glass box-shdw",children:[t.message?Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("p",{className:"capitalize",children:t.message})}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"self-end inline-flex items-center font-bold text-sm",children:[Object(f.jsxs)("p",{children:[t.name," | ",t.sys.country]}),Object(f.jsx)("img",{className:"h-4 ml-1",src:"https://countryflagsapi.com/svg/".concat(t.sys.country),alt:"".concat(t.sys.country," flag")})]}),Object(f.jsxs)("div",{className:"h-20 w-64 inline-flex items-center justify-evenly overflow-hidden mb-2",children:[Object(f.jsxs)("div",{className:"relative w-24 h-24 flex flex-col justify-center",children:[Object(f.jsxs)("p",{className:"text-5xl text-center",children:[t.main.temp.toFixed(),"\xb0"]}),Object(f.jsxs)("p",{className:"w-full absolute bottom-2 left-1/2 transform-center text-center ",children:["Feels like ",Object(f.jsxs)("b",{children:[t.main.feels_like,"\xb0"]})]})]}),Object(f.jsxs)("div",{className:" relative w-24 h-24 flex flex-col justify-center",children:[Object(f.jsx)("img",{className:"",src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),alt:t.weather[0].main}),Object(f.jsx)("p",{className:"w-full absolute bottom-2 left-1/2 transform-center text-center  font-bold capitalize",children:t.weather[0].description})]})]}),Object(f.jsxs)("p",{className:"mb-2",children:["Humidity: ",Object(f.jsxs)("b",{children:[t.main.humidity,"%"]})]}),Object(f.jsxs)("div",{className:"flex flex-col items-center overflow-hidden rounded-xl mb-2 text-center",children:[Object(f.jsxs)("p",{className:"w-full p-2 bg-red-400 font-bold",children:[t.main.temp_max,"\xb0"]}),Object(f.jsxs)("p",{className:"w-full p-2 bg-blue-400 font-bold",children:[t.main.temp_min,"\xb0"]})]})]}),!t.message&&!s&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"inline-flex w-64 items-center justify-evenly mb-2 font-bold",children:[Object(f.jsxs)("div",{className:"inline-flex items-center",children:[Object(f.jsxs)("p",{className:"mr-2",children:[(3.6*t.wind.speed).toFixed(1)," km/h"]}),Object(f.jsx)("img",{className:"w-8",src:w,alt:""})]}),Object(f.jsxs)("div",{className:"inline-flex items-center",children:[Object(f.jsxs)("p",{className:"mr-2",children:[t.wind.deg,"\xb0"]}),Object(f.jsx)("div",{className:"w-7 h-7 flex items-center justify-center rounded-full border border-solid border-black",children:Object(f.jsx)("img",{style:{transform:"rotate(".concat(-135+t.wind.deg,"deg)"),WebkitTransform:"rotate(".concat(-135+t.wind.deg,"deg)")},className:"w-4",src:y,alt:""})})]})]}),Object(f.jsx)(l,{})]}),!t.message&&s&&Object(f.jsx)("button",{className:"px-2 py-1 text-base rounded-lg glass box-shdw",onClick:function(){r({pathname:"/weather/".concat(t.name)})},children:"See more"})]})},k=function(){return Object(f.jsx)("div",{className:"load p-4 my-auto rounded-lg glass box-shdw",children:Object(f.jsx)("p",{children:"Loading..."})})},C=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],s=Object(c.useContext)(p),r=s.dataFromIP,i=s.weather,l=s.handleWeather,o=s.locationByGps,j=s.gpsError,h=function(e){var t=Object(c.useState)(null),n=Object(m.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(!1),i=Object(m.a)(r,2),l=i[0],o=i[1],j=function(){var t=Object(u.a)(d.a.mark((function t(n){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),s(null),o(!0),t.prev=3,t.next=6,b.a.get(e);case 6:c=t.sent,s(c.data),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),console.warn(t.t0),s(t.t0.response.data);case 14:o(!1);case 15:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}();return{response:a,loader:l,handleFetch:j}}("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat("5824cef04bb350250a37f8b214365025","&units=metric")),x=h.response,g=h.loader,v=h.handleFetch;return Object(c.useEffect)((function(){null!==x&&l({currentWeather:x})}),[x]),Object(f.jsxs)("div",{className:"homeview h-4/6 flex flex-col items-center",children:[j.state&&Object(f.jsxs)("div",{className:"absolute w-full top-0 left-0 z-10 py-1 bg-yellow-300 font-bold text-center",children:["\u26a0 ",j.msg]}),Object(f.jsx)(O,{handleCity:function(e){var t=e.value;a(t)},handleFetch:v}),(!r||g)&&Object(f.jsx)(k,{}),r&&i&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(F,{currentWeather:i.currentWeather,forecast:i.forecast,airPollution:i.airPollution,min:!0}),Object(f.jsx)("button",{className:" px-2 py-1 rounded-lg bg-gray-200",onClick:function(){return o()},children:"Use GPS"})]})]})},P=function(){var e=Object(c.useContext)(p).weather,t=Object(i.f)();return Object(f.jsx)("div",{className:"weatherview h-4/5 flex flex-col",children:e?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(F,{currentWeather:e.currentWeather,forecast:e.forecast,airPollution:e.airPollution}),Object(f.jsx)("button",{className:"self-center mt-4 px-2 py-1 text-base rounded-lg bg-gray-200",onClick:function(){return t(-1)},children:"Go back"})]}):Object(f.jsx)(k,{})})};n(58),n(59);var W=function(){var e=(new Date).getHours(),t=e>=16&&e<=18?"sunsetBg":e>=6&&e<=15?"dayBg":"nightBg";return Object(f.jsx)("main",{className:"h-screen flex flex-col justify-center ".concat(t),children:Object(f.jsx)(x,{children:Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{exact:!0,path:"/weather-api",element:Object(f.jsx)(C,{})}),Object(f.jsx)(i.a,{path:"/weather/:name",element:Object(f.jsx)(P,{})})]})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};s.a.render(Object(f.jsx)(r.a,{children:Object(f.jsx)(W,{})}),document.getElementById("root")),S()}},[[60,1,2]]]);
//# sourceMappingURL=main.c44b7287.chunk.js.map