export async function appendXF(block, xfPath) {
    try {
        
        const myHeaders = new Headers();
    
        myHeaders.append("Authorization", "Basic YWRtaW46YWRtaW4=");
        myHeaders.append("Cookie", "cq-authoring-mode=TOUCH");
    
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };
    
        const resp = await fetch(xfPath);
    
        if (resp.ok) {
            let str = await resp.text();
            const { location } = window;
            if (location.href.includes('localhost') || location.href.includes('.aem.live')) {
                str = str.replaceAll(
                    '/etc.clientlibs/',
                    'https://stg1-website.hdfclife.tech/etc.clientlibs/',
                );
                str = str.replaceAll(
                    '/content/',
                    'https://stg1-website.hdfclife.tech/content/',
                );
            }
            const div = document.createElement('div');
            div.innerHTML = str;
            div.querySelectorAll('link').forEach((link) => {
                try {
                    const newLink = document.createElement('link');
                    newLink.href = link.href.replace('http://localhost:3000', 'https://stg1-website.hdfclife.tech');
                    newLink.rel = 'stylesheet';
                    document.head.append(newLink);
                } catch (error) {
                    console.error(error); // eslint-disable-line
                }
            });
            block.append(div.querySelector('.root'));
            div.querySelectorAll('script').forEach((link) => {
                const exculdeLink = [
                    '/clientlibs/granite/',
                    '/foundation/clientlibs',
                ];
                // debugger;
                if (!exculdeLink.filter((clientLib) => link.src.includes(clientLib)).length) {
                    try {
                        const newScript = document.createElement('script');
                        newScript.src = link.src.replace('http://localhost:3000', 'https://stg1-website.hdfclife.tech');
                        newScript.type = 'text/javascript';
    
                        document.body.append(newScript);
                    } catch (error) {
                        console.error(error); // eslint-disable-line
                    }
                }
            });
    
            if (window.isLast) {
                setTimeout(() => {
                    const event = new Event('DOMContentLoaded');
                    // Dispatch the event
                    document.dispatchEvent(event);
                }, 1000);
            }
            window.isLast = true;
        }
        return block;
    } catch (error) {
        console.warn(error);
        
    }
}

export default async function decorate(block) {
    let xfPath = block.querySelector('a')?.href;
    const urlObject = new URL(xfPath);
    const path = urlObject.pathname;
    block.innerHTML = '';
    // xfPath = 'https://stg1-website.hdfclife.tech' + path;
    // xfPath = 'https://stg1-website.hdfclife.tech' + path;
    await appendXF(block, xfPath);
}