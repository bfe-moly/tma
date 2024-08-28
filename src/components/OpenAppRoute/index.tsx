import { Button, Space } from "antd-mobile";
import React from "react";
import { FC } from "react";

interface OpenAppRouteProps {

}


const APPS_FLYERS = 'byAppsFlyers';
const CDN_URL =
    '/tma/by_appsflyer_c67e7b7d.js';

let loadByAppsFlyerPromise: any = null;


export const loadByAppsFlyerScript = (notDelayLoad = false) => {
    if (loadByAppsFlyerPromise) {
        return loadByAppsFlyerPromise;
    }
    loadByAppsFlyerPromise = new Promise((resolve, reject) => {
        // @ts-ignore
        if (window[APPS_FLYERS]) {
            resolve(true);
            return;
        }
        const script = document.createElement('script');
        script.id = 'ByAppsFlyers';
        script.src = CDN_URL;
        script.defer = true;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            loadByAppsFlyerPromise = null;
            reject();
        };
        // Delay to append script avoiding lighthouse performance
        if (notDelayLoad) {
            document.body.appendChild(script);
        } else {
            if (document.readyState === 'complete') {
                document.body.appendChild(script);
            } else {
                window.addEventListener('load', () => {
                    document.body.appendChild(script);
                });
            }
        }
    });

    return loadByAppsFlyerPromise;
};

export const triggerOneLink = async (href: string, channelParams = false) => {
    try {
        await loadByAppsFlyerScript();

        let nativePath;

        if (href.startsWith('bybitapp://')) {
            nativePath = { path: href };
        } else if (href.startsWith('by-mini://')) {
            nativePath = {
                path: `bybitapp://open/route?targetUrl=${encodeURIComponent(href)}`,
            };
        } else {
            nativePath = {
                path: ''
            };
        }


        // @ts-ignore
        const handledOneLink = await window[APPS_FLYERS].triggerOneLink(
            nativePath ? nativePath.path : '',
            channelParams
        );

        return handledOneLink;
    } catch (e) {
        console.warn('triggerOneLink fail, cause:', e);
    }
};

const OpenAppRoute: FC<OpenAppRouteProps> = () => {
    const openApp = async (url: string) => {
        debugger
        await triggerOneLink(url);
    }
    return <div style={{ color: '#000' }}>
        <Space>
            <Button color='success' onClick={() => openApp('bybitapp://open/home?tab=2&symbol=BTCUSDT&page=trading')}>打开合约</Button>
            <Button color='success' onClick={() => openApp('bybitapp://open/home?tab=3&symbol=BTCUSDT')}>打开现货</Button>
            <Button color='success' onClick={() => openApp('by-mini://trading_bot/createGridBot')}>打开小程序-现货网格</Button>
        </Space>
    </div>
}

export default OpenAppRoute;