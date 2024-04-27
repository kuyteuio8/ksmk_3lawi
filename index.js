const request = require('request');
const tokens = [
  
    'MTIwNTQ1NjE4NjIwODQxOTg2MA.GZkZYY.GG5rj4ZdXelXAUWpM-Rj0vdVCL7Urw_ogMHxGM'
  
];

const payload = {
  'content': 'كسم عايلتك يبن المتخلفة احط خرم أمك بين إيري يبن العرصة بنت الشرموطة كس أمج فوق زبي يا عيل الكلبة المسعوره كسخت ذريتك وماماتك القحبة يبن اللقيطة اخرط طيزمك وكسخمتك بزبي يبن التسعة وتسعين قواد ابن المزمولة ارفع راس اختك القحبة بمنوياتي واخليها تتشمم بإيري وتخضع للرائحة بتوسل وأنا اخرمطه بقاعها المشعر يبن المخضوعة أحشر طبونمك بعيري بفشج وجلخ يبن الترمة المفروعة إيري فشخ منوياته على بزازلمك يبن الحرام العق زبي انت ومامتك القحبة يبن الزواني المنايك أجلخ بكسمواتك وافتح صرم عيلتك الروافض لي يعشقون زب فحلهم رانغو المثخن يبن البزولة المليانة لي تقطر حليب وهي تنطط فوق زوبي يبن القحبوشة شخيت كس أم أم أمك يبن الداعرة أشق كسمج المشعر بثواني يبن العرصَه كسم شرفك الملاعين لي شقيت صدرهم بزب مكحل ومفحم زي كسخالتك وكس جداتك الناشف لي خليته يفزك ويصير يقطر يبن الممحونة كس اسلافك يبن الفاجرة المكشورة بزغرد عشرين راس بطيزمك يبن السافلة الفاجرة بدخ بكس خالتك  كل قطرة من منويات زبي الفحل يبن الخكري لي جايبين بخرقه ستين راس مثل لي جبتهم بأمك الموسع لها حتشونها الوسخ يبن الوسخة زنيت بشرفك وكسمواتك وعرضك وعرضم اجدادك واسلافك يبن الزانية دقيت حتشونهم بالعيورة المفضية زي حافة المسامير يبن المتقوبة كسم عيلتك على كسخت شرفك يبن المهان طحنمج بسيف العلي يبن البزي الخاري انا ربك الاعلى بنيك امك الاسمى و بعمل من امك بصلة يبن القحبة بقطع بزاز امج يبن الكر الخاري بزبي المهاري بشطح امك و اقطع ربك و اسلخ كسمهاتمج للموت يبن المكبوتة الي تهرب للميوت لعنج السارية بزبي عارية يبن الهاربة لفحلول امها لحتى يبندون عيري و يعطوني ميوت و لا يسمحون لي لطحن خرزت امهاتها يبن الشرموطة أمج فوق زبي يا عيل الكلبة المسعوره اختك على زبي مقعورة و يبن العراقية اللقيطة اخرط طيزمك وكسخمتك بزبي يبن التسعة وتسعين قواد ابن المزمولة ارفع راس اختك القحبة بمنوياتي واخليها تتشمم بإيري وتخضع للرائحة وتتوسل اخرمطه بقاعها الضيق يبن المخضوعة و انحر كسمك زي بالعوضة ادقق بحتشونمك المنبوذة و اسوي من شرف امك ملفوفة يبن المشوهة المنحورة على زبي مقتولة <@1155452078232178859>'
};

const groupIds = [
      
  '1231407462255427644'

]; 

let currentTokenIndex = 0;
let currentGroupIndex = 0;

function sendRequest() {
  const currentToken = tokens[currentTokenIndex];
  const currentGroupId = groupIds[currentGroupIndex];
  
  const header = {
    'Authorization': currentToken
  };

  request.post(`https://discord.com/api/v9/channels/${currentGroupId}/messages?limit=50`, {
    headers: header,
    json: payload
  }, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }
    
    if (response.statusCode >= 400 && response.statusCode < 500) {
      console.error(`Received ${response.statusCode} error. Trying again later.`);
      const retryInterval = 5000; 
      setTimeout(sendRequest, retryInterval);
      return;
    }
    
    console.log(body);
    
    const intervalBetweenGroups = 600;
    const intervalAfterMessage = 600;
    
    currentTokenIndex = (currentTokenIndex + 1) % tokens.length;
    currentGroupIndex = (currentGroupIndex + 1) % groupIds.length;
    
    setTimeout(sendRequest, intervalBetweenGroups);
  });
}

sendRequest();


const express = require("express");
const app = express();

app.listen(() => console.log("I'm Ready To nik ksm 3lawi..! 24/7"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>كسمك يا علاوي  </h1></center
  </body>`);
});

setInterval(function() {
  var now = new Date();
  console.log(now.toLocaleTimeString());
}, 10000);
