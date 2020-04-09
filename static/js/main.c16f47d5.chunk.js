(this.webpackJsonpreactcharts=this.webpackJsonpreactcharts||[]).push([[0],{175:function(a,e,t){},177:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),o=t(56),c=t.n(o),l=(t(64),t(17)),s=t(18),d=t(21),i=t(20),m=t(19),u=t.n(m),p=t(6),h=function(a){Object(d.a)(t,a);var e=Object(i.a)(t);function t(a){var n;return Object(l.a)(this,t),(n=e.call(this,a)).state={Data:{}},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var a=this;u.a.get("https://api.covid19api.com/live/country/sri-lanka/status/confirmed").then((function(e){console.log(e);var t=e.data,n=[],r=[],o=[],c=[],l=[];t.forEach((function(a){n.push(a.Confirmed),r.push(a.Active),o.push(a.Deaths),c.push(a.Recovered),l.push(a.Date.split("T")[0])})),a.setState({Data:{labels:l,datasets:[{label:"Confirmed",data:n,borderColor:"#ffc107",backgroundColor:"transparent",spanGaps:!0,borderWidth:2},{label:"Active",data:r,borderColor:"#17a2b8",backgroundColor:"transparent",spanGaps:!0,borderWidth:2},{label:"Death",data:o,borderColor:"#dc3545",backgroundColor:"transparent",spanGaps:!0,borderWidth:2},{label:"Recovered",data:c,borderColor:"#28a745",backgroundColor:"transparent",spanGaps:!0,borderWidth:2}]}})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-none d-md-block"},r.a.createElement(p.b,{height:150,data:this.state.Data,options:{maintainAspectRatio:!0,responsive:!0}})),r.a.createElement("div",{className:"d-block d-sm-none"},r.a.createElement(p.b,{height:300,data:this.state.Data,options:{maintainAspectRatio:!0,responsive:!0}})))}}]),t}(n.Component),f=function(a){Object(d.a)(t,a);var e=Object(i.a)(t);function t(a){var n;return Object(l.a)(this,t),(n=e.call(this,a)).state={Data:{}},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var a=this;u.a.get("https://api.covid19api.com/live/country/sri-lanka/status/confirmed").then((function(e){console.log(e);var t=e.data,n=[],r=[],o=[],c=[],l=[];t.forEach((function(a){n.push(a.Confirmed),r.push(a.Active),o.push(a.Deaths),c.push(a.Recovered),l.push(a.Date.split("T")[0])})),a.setState({Data:{labels:l,datasets:[{label:"Confirmed",data:n,borderColor:"#ffc107",backgroundColor:"#ffc107",spanGaps:!0,borderWidth:2},{label:"Active",data:r,borderColor:"#17a2b8",backgroundColor:"#17a2b8",spanGaps:!0,borderWidth:2},{label:"Deaths",data:o,borderColor:"#dc3545",backgroundColor:"#dc3545",spanGaps:!0,borderWidth:2},{label:"Recovered",data:c,borderColor:"#28a745",backgroundColor:"#28a745",spanGaps:!0,borderWidth:2}]}})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-none d-md-block"},r.a.createElement(p.a,{height:150,data:this.state.Data,options:{maintainAspectRatio:!0,responsive:!0}})),r.a.createElement("div",{className:"d-block d-sm-none"},r.a.createElement(p.a,{height:300,data:this.state.Data,options:{maintainAspectRatio:!0,responsive:!0}})))}}]),t}(n.Component),b=t(58);var v=function(a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"p-3 text-center fw-6",style:{backgroundColor:"white"}},a.cardTitle),r.a.createElement("p",{className:"bg-transparent text-center align-middle fw-7 text-font"},a.count))},E=function(a){var e=a.dashboardData;return r.a.createElement("div",{className:"container mt-3"},r.a.createElement("div",{className:"alert alert-danger main-heading p-3",role:"alert","data-aos":"fade-up","data-aos-duration":"1200"},r.a.createElement("h2",null,"Local Information"),r.a.createElement("p",null,"Last Updated: ",e.update_date_time)),r.a.createElement("div",{className:"container d-gap"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-4 col-6 np-5 np","data-aos":"fade-up","data-aos-duration":"1200"},r.a.createElement("div",{className:"my-3 text-center shadow",style:{backgroundColor:"#fff"}},r.a.createElement("i",{class:"fa fa-hospital-o text-primary","aria-hidden":"true"}),r.a.createElement(v,{count:e.local_new_cases,cardTitle:"New Cases"}))),r.a.createElement("div",{className:"col-md-3 col-sm-4 col-6 np-5 np","data-aos":"fade-up","data-aos-duration":"1200"},r.a.createElement("div",{className:"my-3 text-center shadow",style:{backgroundColor:"#fff"}},r.a.createElement("i",{class:"fa fa-user-md text-warning","aria-hidden":"true"}),r.a.createElement(v,{count:e.local_total_cases,cardTitle:"Total Cases"}))),r.a.createElement("div",{className:"col-md-3 col-sm-4 col-6 np-5 np","data-aos":"fade-up","data-aos-duration":"1200"},r.a.createElement("div",{className:"my-3 text-center shadow",style:{backgroundColor:"#fff"}},r.a.createElement("i",{class:"fa fa-ambulance text-info","aria-hidden":"true"}),r.a.createElement(v,{count:e.local_active_cases,cardTitle:"Active"}))),r.a.createElement("div",{className:"col-md-3 col-sm-4 col-6 np-5 np","data-aos":"fade-up","data-aos-duration":"1200"},r.a.createElement("div",{className:"my-3 text-center shadow",style:{backgroundColor:"#fff"}},r.a.createElement("i",{class:"fa fa-bed text-danger","aria-hidden":"true"}),r.a.createElement(v,{count:e.local_new_deaths,cardTitle:"New Deaths"})))),r.a.createElement("div",{className:"row d-gap"},r.a.createElement("div",{className:"col-md-3 col-sm-4 col-6 np-5 np","data-aos":"fade-up","data-aos-duration":"1200"},r.a.createElement("div",{className:"my-3 text-center shadow",style:{backgroundColor:"#fff"}},r.a.createElement("i",{class:"fa fa-exclamation-triangle text-danger","aria-hidden":"true"}),r.a.createElement(v,{count:e.local_deaths,cardTitle:"Total Deaths"}))),r.a.createElement("div",{className:"col-md-3 col-sm-4 col-6 np-5 np","data-aos":"fade-up","data-aos-duration":"1200"},r.a.createElement("div",{className:"my-3 text-center shadow",style:{backgroundColor:"#fff"}},r.a.createElement("i",{class:"fa fa-medkit text-warning","aria-hidden":"true"}),r.a.createElement(v,{count:e.local_total_number_of_individuals_in_hospitals,cardTitle:"Admitted"}))),r.a.createElement("div",{className:"col-md-3 col-sm-4 col-6 np-5 np","data-aos":"fade-up","data-aos-duration":"1200"},r.a.createElement("div",{className:"my-3 text-center shadow",style:{backgroundColor:"#fff"}},r.a.createElement("i",{class:"fa fa-plus-square text-success","aria-hidden":"true"}),r.a.createElement(v,{count:e.local_recovered,cardTitle:"Recovered"}))))))};var g=function(){var a=Object(n.useState)({dashboard:{},hospitalData:[]}),e=Object(b.a)(a,2),t=e[0],o=e[1];return Object(n.useEffect)((function(){fetch("https://hpb.health.gov.lk/api/get-current-statistical").then((function(a){return a.json()})).then((function(a){!0===a.success&&o({dashboard:a.data,hospitalData:a.data.hospital_data})})).catch((function(){return console.log("Something went wrong...")}))}),[]),r.a.createElement(r.a.Fragment,null,t.hospitalData.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(E,{dashboardData:t.dashboard}))):r.a.createElement("div",{className:"container text-center"},r.a.createElement("div",{className:"spinner-grow",style:{marginTop:150,width:250,height:250},role:"status"},r.a.createElement("span",{className:"sr-only"},"Fetching Data..."))))};t(175);var N=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(g,null),r.a.createElement("div",{className:"p-5"}),r.a.createElement(h,null),r.a.createElement("div",{className:"p-5"}),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(176);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))},59:function(a,e,t){a.exports=t(177)},64:function(a,e,t){}},[[59,1,2]]]);
//# sourceMappingURL=main.c16f47d5.chunk.js.map