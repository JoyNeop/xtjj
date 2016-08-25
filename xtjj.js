(function () {
    if (document.querySelectorAll('meta[name="xtjj"]').length >= 1) {
        var metaTag = document.querySelectorAll('meta[name="xtjj"]')[0];
        var validate_ = function (content) {
            var splited = content.split(';');
            console.log(splited[2].split('-'));
            console.log(78123783278979);
            return ( true &&
                splited.length === 3 &&
                /^[0-9a-f]{24}$/.test(splited[0]) &&
                (/^(top|bottom)-(left|right)$/.test(splited[1]) || /^static$/.test(splited[1])) &&
                /^(blue|white|black|[0-9A-F]{6})-(blue|white|black|[0-9A-F]{6})$/.test(splited[2]) &&
            true );
        };
        var parse_ = function (content) {
            window.palette = {
                blue: '006CFF',
                white: 'FFFFFF',
                black: '000000'
            };
            window.splited = content.split(';');
            // "cfo" for "ConFig Object"
            var cfo = {
                positionalDimensions: '',
                jjid: splited[0],
                position: ((splited[1] === 'static') ? 'static' : 'fixed')
            };
            if (cfo.position === 'fixed') {
                cfo.verticalPlacement = splited[1].split('-')[0];
                cfo.horizontalPlacement = splited[1].split('-')[1];
                cfo.positionalDimensions = 'top: 30px; left: 10px;'.replace('top', cfo.verticalPlacement).replace('left', cfo.horizontalPlacement);
            };
            cfo.color = window.palette[splited[2].split('-')[0]] || window.splited[2].split('-')[0];
            cfo.backgroundColor = window.palette[splited[2].split('-')[1]] || splited[2].split('-')[1];
            console.log(JSON.stringify(cfo));
            return cfo;
        };
        var renderDom = function (configObj, svg) {
            var domTemplate = '<div id="xtjj-4270203835628303" style="position: {{config.position}};{{config.positionalDimensions}}"><a style="display: block;" href="http://gold.xitu.io/entry/{{config.jjid}}/detail/comment?utm_click_through=joyneop_xtjj_addon" target="_blank">{{svg}}</a></div>';
            domImplementation = domTemplate.replace('{{config.position}}', config.position)
            .replace('{{config.positionalDimensions}}', config.positionalDimensions)
            .replace('{{config.jjid}}', config.jjid)
            .replace('{{svg}}', svg);

            if (document.body) {
                document.write(domImplementation);
            } else {
                window.addEventListener('load', function () {
                    document.write(domImplementation);
                });
            };
        };

        if (validate_(metaTag.getAttribute('content'))) {
            var config = parse_(metaTag.getAttribute('content'));
            var svgTemplate = '<svg width="108" height="80" viewBox="0 0 108 80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background:#dfedff;display:block;"><defs><path id="a" d="M0 0h108v80H0z"/><mask id="b" x="0" y="0" width="108" height="80" fill="#fff"><use xlink:href="#a"/></mask></defs><g fill="none" fill-rule="evenodd"><path d="M57.293 18.583L54.017 16l-3.422 2.7-.178.142 3.6 2.87 3.612-2.87-.337-.26zM69.708 28.6l-15.7 12.38-15.69-12.372L36 30.47l18.008 14.2L72.026 30.46l-2.318-1.86zm-15.7 1.005l-8.544-6.736-2.317 1.86 10.86 8.564 10.87-8.572-2.316-1.86-8.552 6.743zM21.45 53.83c-.266 0-.406.126-.448.406l-.406 3.15h-2.408l.392-3.094c.042-.294-.112-.462-.406-.462h-1.106c-.266 0-.42.126-.462.406l-1.022 8.316c-.028.28.126.448.406.448h1.12c.266 0 .434-.126.462-.406l.392-3.402h2.422l-.406 3.36c-.028.28.126.448.406.448h1.12c.266 0 .42-.126.448-.406l1.022-8.316c.042-.28-.112-.448-.406-.448h-1.12zm4.62 0c-.266 0-.42.126-.462.406l-1.022 8.316c-.028.28.126.448.406.448h1.12c.266 0 .42-.126.462-.406l1.008-8.316c.042-.28-.112-.448-.406-.448H26.07zm6.244 9.338c.798 0 1.778-.224 2.59-.532.322-.126.42-.266.448-.574l.504-4.102c.042-.28-.112-.448-.406-.448h-2.226c-.266 0-.42.126-.448.406l-.084.798c-.042.28.098.448.392.448h.728l-.252 2.072a3.39 3.39 0 0 1-1.022.14c-.882 0-1.26-.392-1.134-1.456l.406-3.178c.126-.938.588-1.316 1.624-1.316.56 0 1.246.112 1.876.266.28.07.462-.042.504-.336l.126-.91c.042-.266-.084-.42-.35-.49a10.4 10.4 0 0 0-2.268-.294c-2.156 0-3.234.966-3.486 3.094l-.364 2.996c-.28 2.31.756 3.416 2.842 3.416zM43.78 53.83c-.266 0-.406.126-.448.406l-.406 3.15h-2.408l.392-3.094c.042-.294-.112-.462-.406-.462h-1.106c-.266 0-.42.126-.462.406l-1.022 8.316c-.028.28.126.448.406.448h1.12c.266 0 .434-.126.462-.406l.392-3.402h2.422l-.406 3.36c-.028.28.126.448.406.448h1.12c.266 0 .42-.126.448-.406l1.022-8.316c.042-.28-.112-.448-.406-.448h-1.12zm4.228 0c-.266 0-.42.126-.462.406l-.112.966c-.042.28.112.448.392.448H49.8l-.84 6.902c-.042.28.126.448.406.448h1.12c.266 0 .42-.126.448-.406l.84-6.944h2.03c.266 0 .42-.126.448-.392l.126-.966c.042-.294-.112-.462-.406-.462h-5.964zm9.072 0c-.266 0-.42.126-.462.406l-1.022 8.316c-.028.28.126.448.434.448h4.452c.252 0 .406-.126.448-.406l.112-.952c.028-.28-.126-.448-.406-.448h-2.898l.854-6.902c.028-.294-.112-.462-.406-.462H57.08zm7.518 0c-.266 0-.42.126-.462.406l-1.022 8.316c-.028.28.126.448.406.448h1.12c.266 0 .42-.126.462-.406l1.008-8.316c.042-.28-.112-.448-.406-.448h-1.106zm6.244 9.338c.798 0 1.778-.224 2.59-.532.322-.126.42-.266.448-.574l.504-4.102c.042-.28-.112-.448-.406-.448h-2.226c-.266 0-.42.126-.448.406l-.084.798c-.042.28.098.448.392.448h.728l-.252 2.072a3.39 3.39 0 0 1-1.022.14c-.882 0-1.26-.392-1.134-1.456l.406-3.178c.126-.938.588-1.316 1.624-1.316.56 0 1.246.112 1.876.266.28.07.462-.042.504-.336l.126-.91c.042-.266-.084-.42-.35-.49a10.4 10.4 0 0 0-2.268-.294c-2.156 0-3.234.966-3.486 3.094L68 59.752c-.28 2.31.756 3.416 2.842 3.416zm11.466-9.338c-.266 0-.406.126-.448.406l-.406 3.15h-2.408l.392-3.094c.042-.294-.112-.462-.406-.462h-1.106c-.266 0-.42.126-.462.406l-1.022 8.316c-.028.28.126.448.406.448h1.12c.266 0 .434-.126.462-.406l.392-3.402h2.422l-.406 3.36c-.028.28.126.448.406.448h1.12c.266 0 .42-.126.448-.406l1.022-8.316c.042-.28-.112-.448-.406-.448h-1.12zm4.228 0c-.266 0-.42.126-.462.406l-.112.966c-.042.28.112.448.392.448h1.974l-.84 6.902c-.042.28.126.448.406.448h1.12c.266 0 .42-.126.448-.406l.84-6.944h2.03c.266 0 .42-.126.448-.392l.126-.966c.042-.294-.112-.462-.406-.462h-5.964z" fill="#006cff"/><use stroke="#006cff" mask="url(#b)" stroke-width="4" xlink:href="#a"/></g></svg>';
            var realSVG = svgTemplate.replace(/dfedff/g, config.backgroundColor).replace(/006cff/g, config.color);
            console.log(config);
            renderDom(config, realSVG);
        };
    };
})();
