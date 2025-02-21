
export async function appendXF(block, xfPath) {
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
        const exculdeLink = [
            '/hdfclifeinsurancecompany/',
        ];
        div.querySelectorAll('link').forEach((link) => {
            if (exculdeLink.filter((clientLib) => link.href.includes(clientLib)).length) {
                try {
                    const newLink = document.createElement('link');
                    newLink.href = link.href.replace('http://localhost:3000', 'https://stg1-website.hdfclife.tech');
                    console.log(' Link :: ', newLink.href);
                    
                    newLink.rel = 'stylesheet';
                    document.head.append(newLink);
                } catch (error) {
                    console.error(error); // eslint-disable-line
                }
            }
        });
        block.append(div.querySelector('.root'));
        div.querySelectorAll('script').forEach((link) => {
            // debugger;
            if (exculdeLink.filter((clientLib) => link.src.includes(clientLib)).length) {
                try {
                    const newScript = document.createElement('script');
                    newScript.src = link.src.replace('http://localhost:3000', 'https://stg1-website.hdfclife.tech');
                    newScript.type = 'text/javascript';
                    console.log(' Script :: ', newScript.src);

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
            });
        }
        window.isLast = true;
    }
    return block;
}

export default async function decorate(block) {
    try {
        const xfPath = block.querySelector('a')?.href;
        block.innerHTML = '';
        await appendXF(block, xfPath);
    } catch (error) {
        console.warn(error); // eslint-disable-line
    }
}
