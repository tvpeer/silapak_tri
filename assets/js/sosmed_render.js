
function SentimenLabel(label) {

    if (label == 'pos') {
        ColorLabel = `badge bg-primary rounded-full`
    } else if (label == 'neg') {
        ColorLabel = `badge bg-danger rounded-full`
    
    } else {
        ColorLabel = `badge bg-info rounded-full`
    
    }
    
    return ColorLabel
    }

    function asesmentRenderIG (q) {
    
        q.forEach(async function (data) {
        
            document
                .getElementById("Searchdata")
                .innerHTML += `<div
                class="h-screen max-h-[30rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                <div class="p-5 flex items-center flex-col sm:flex-row">
                    <div class="mb-5 w-20 h-20 rounded-full overflow-hidden">
                        <img
                            src="//i0.wp.com/upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png?w=50&h=50"
                            alt="${data.screen_name}"
                            class="w-full h-full object-cover"/>
                    </div>
                    <div class="flex-1 ltr:sm:pl-5 rtl:sm:pr-5 text-center sm:text-left">
                        <h5 class="text-[#3b3f5c] text-[15px] font-semibold mb-2 dark:text-white-light">${data.screen_name}</h5>
                        <p class="mb-2 text-white-dark">@${data.screen_name}</p>
                        <span class="${SentimenLabel(
                    data.sentiment
                )}">${data.sentiment}</span>
                        <p class="font-semibold text-white-dark mt-4 sm:mt-8">${data.content}</p>
                    </div>
                </div>
            </div>`
        });
        }
        
         
        function asesmentRenderFb(q) {
    
            q.forEach(async function (data) {
            
                document
                    .getElementById("Searchdata")
                    .innerHTML += `<div
                    class="h-screen max-h-[30rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                    <div class="p-5 flex items-center flex-col sm:flex-row">
                        <div class="mb-5 w-20 h-20 rounded-full overflow-hidden">
                            <img
                                src="http://i0.wp.com/upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png?w=50&h=50"
                                alt="${data.screen_name}"
                                class="w-full h-full object-cover"/>
                        </div>
                        <div class="flex-1 ltr:sm:pl-5 rtl:sm:pr-5 text-center sm:text-left">
                            <h5 class="text-[#3b3f5c] text-[15px] font-semibold mb-2 dark:text-white-light">${data.source_name}</h5>
                            <p class="mb-2 text-white-dark">@${data.screen_name}</p>
                            <span class="${SentimenLabel(
                        data.sentiment
                    )}">${data.sentiment}</span>
                            <p class="font-semibold text-white-dark mt-4 sm:mt-8">${(data.content).replaceAll(`${SearchKey}`, `<mark class="undefined " highlightindex="1">${SearchKey}</mark>`)}</p>
                        </div>
                    </div>
                </div>`
            });
            }

            function asesmentRenderTW(q) {
    
                q.forEach(async function (data) {
                
                    document
                        .getElementById("Searchdata")
                        .innerHTML += `<div
                        class="h-screen max-h-[30rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                        <div class="p-5 flex items-center flex-col sm:flex-row">
                            <div class="mb-5 w-20 h-20 rounded-full overflow-hidden">
                                <img
                                    src="${data.thumbnail_user}"
                                    alt="${data.screen_name}"
                                    class="w-full h-full object-cover"/>
                            </div>
                            <div class="flex-1 ltr:sm:pl-5 rtl:sm:pr-5 text-center sm:text-left">
                                <h5 class="text-[#3b3f5c] text-[15px] font-semibold mb-2 dark:text-white-light">${data.name}</h5>
                                <p class="mb-2 text-white-dark">@${data.screen_name}</p>
                                <span class="${SentimenLabel(
                            data.sentiment
                        )}">${data.sentiment}</span>
                                <p class="font-semibold text-white-dark mt-4 sm:mt-8">${(data.tweet).replaceAll(`${SearchKey}`, `<mark class="undefined " highlightindex="1">${SearchKey}</mark>`)}</p>
                            </div>
                        </div>
                    </div>`
                });
                }

        function asesmentRenderYT(q) {
    
    q.forEach(async function (data) {
    
        document
            .getElementById("Searchdata")
            .innerHTML += `<div
            class="h-screen max-h-[30rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
            <div class="p-5 flex items-center flex-col sm:flex-row">
                <div class="mb-5 w-20 h-20 rounded-full overflow-hidden">
                    <img
                        src="${data.image}"
                        alt="${data.user_id}"
                        class="w-full h-full object-cover"/>
                </div>
                <div class="flex-1 ltr:sm:pl-5 rtl:sm:pr-5 text-center sm:text-left">
                    <h5 class="text-[#3b3f5c] text-[15px] font-semibold mb-2 dark:text-white-light">${data.user_id}</h5>
                    <p class="mb-2 text-white-dark">@${data.user_id}</p>
                    <span class="${SentimenLabel(
                data.sentiment
            )}">${data.sentiment}</span>
                    <p class="font-semibold text-white-dark mt-4 sm:mt-8">${(data.title).replaceAll(`${SearchKey}`, `<mark class="undefined " highlightindex="1">${SearchKey}</mark>`)}</p>
                </div>
            </div>
        </div>`
    });
    }
    function asesmentRenderNews(q) {
    
        q.forEach(async function (data) {
        
            document
                .getElementById("Searchdata")
                .innerHTML += `<div
                class="h-screen max-h-[30rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                <div class="p-5 flex items-center flex-col sm:flex-row">
                    <div class="mb-5 w-20 h-20 rounded-full overflow-hidden">
                        <img
                            src="${data.images}"
                            alt="${data.user_id}"
                            class="w-full h-full object-cover"/>
                    </div>
                    <div class="flex-1 ltr:sm:pl-5 rtl:sm:pr-5 text-center sm:text-left">
                        <h5 class="text-[#3b3f5c] text-[15px] font-semibold mb-2 dark:text-white-light">${data.title}</h5>
                        <p class="mb-2 text-white-dark">@${data.source}</p>
                        <span class="${SentimenLabel(
                    data.sentiment
                )}">${data.sentiment}</span>
                <span>                
                <img src="${data.images}" alt="image" class="h-100 w-full rounded">
                </span>
                        <p class="font-semibold text-white-dark mt-4 sm:mt-8">${data.content}</p>
                    </div>
                </div>
            </div>`
        });
        }
    
    // asesmentRender(response.data.data)
    
    var SearchKey = 'CurrentQuery'
    
    let data = Qs.stringify({
       
    });
    
    const getLastItemsS = thePath =>thePath.split("/")[7]
    const sosmedS = getLastItemsS(window.location.href)

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: '/api/search/topic-searchs?search='+sosmedS,
      headers: { },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
    //   console.log(JSON.stringify(response.data.news));

    
    //   console.log(JSON.stringify(response.data.news));
    const getLastItems = thePath =>thePath.split("/")[6]
        const sosmed = getLastItems(window.location.href)
    if(sosmed=='youtube'){
        asesmentRenderYT(response.data.youtube)
    }else if(sosmed=='facebook'){
        asesmentRenderFb(response.data.facebook)
    }else if(sosmed=='twitter'){
        asesmentRenderTW(response.data.twitter)
    }else if(sosmed=='instagram'){
        asesmentRenderIG(response.data.instagram)
    }else {
        console.log('news')

        asesmentRenderNews(response.data.news)
    } 
    
       
})
    .catch((error) => {
      console.log(error);
    });
    


    