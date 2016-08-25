(function () {
    if (document.querySelectorAll('meta[name="xtjj"]').length >= 1) {
        var metaTag = document.querySelectorAll('meta[name="xtjj"]')[0];
        var validate_ = function (content) {
            var splited = content.split(';');
            return ( true &&
                splited.length === 3 &&
                /^[0-9a-f]{24}$/.test(splited[0]) &&
                (/^(top|bottom)-(left|right)$/.test(splited[1]) || /^static$/.test(splited[1])) &&
                /^(blue|white|black|[0-9A-F]{6})-(transparent|blue|white|black|[0-9A-F]{6})$/.test(splited[2]) &&
            true );
        };
        var parse_ = function (content) {
            window.palette = {
                transparent: 'rgba(0,0,0,0)',
                blue: '#006CFF',
                white: '#FFFFFF',
                black: '#000000'
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
            var svgTemplate = '<svg width="90" height="90" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background:#dfedff;display:block;"><defs><path id="a" d="M0 0h90v90H0z"/><mask id="b" x="0" y="0" width="90" height="90" fill="#000"><use xlink:href="#a"/></mask></defs><g fill="none" fill-rule="evenodd"><path d="M48.775 19.49L44.348 16l-4.626 3.647-.24.193 4.866 3.88 4.88-3.88-.453-.35zM65.55 33.03l-21.215 16.73-21.203-16.72L20 35.554l24.335 19.188 24.348-19.2-3.132-2.514zm-21.215 1.357L32.79 25.282l-3.132 2.515L44.335 39.37l14.69-11.583-3.132-2.515-11.558 9.113zM16.65 70.274c-.518-.21-.714-.56-.644-1.036l.028-.098c.07-.434.378-.672 1.064-.672.21 0 .434 0 .588.014.378.07.756.168 1.148.28.294.084.462-.042.504-.322l.14-.994c.042-.266-.084-.434-.364-.504-.672-.168-1.47-.28-1.974-.28-1.862 0-2.758.7-3.052 2.072l-.028.14c-.308 1.498.252 2.562 1.554 3.08l.98.378c.658.266.84.56.756 1.092l-.014.112c-.07.504-.42.812-1.106.812-.14 0-.252 0-.406-.014a13.26 13.26 0 0 1-1.61-.518c-.28-.112-.476.014-.518.308l-.14 1.064c-.042.252.07.42.322.504.812.28 1.876.476 2.506.476 1.736 0 2.73-.938 2.912-2.464l.028-.238c.168-1.414-.364-2.282-1.568-2.758l-1.106-.434zm6.302-3.444c-.266 0-.42.126-.462.406l-1.022 8.316c-.028.28.126.448.42.448h4.424c.252 0 .42-.14.448-.406l.112-.966c.028-.294-.126-.448-.406-.448H23.61l.224-1.932h2.632c.28 0 .42-.126.462-.406l.112-.952c.042-.294-.098-.448-.406-.448h-2.562l.224-1.792h2.898c.294 0 .42-.126.462-.392l.126-.966c.042-.294-.112-.462-.406-.462h-4.424zm7.87 0c-.266 0-.42.126-.462.406l-1.022 8.316c-.028.28.126.448.434.448h4.452c.252 0 .406-.126.448-.406l.112-.952c.028-.28-.126-.448-.406-.448H31.48l.854-6.902c.028-.294-.112-.462-.406-.462h-1.106zm7.618 0c-.266 0-.42.126-.462.406l-1.022 8.316c-.028.28.126.448.42.448H41.8c.252 0 .42-.14.448-.406l.112-.966c.028-.294-.126-.448-.406-.448h-2.856l.224-1.932h2.632c.28 0 .42-.126.462-.406l.112-.952c.042-.294-.098-.448-.406-.448H39.56l.224-1.792h2.898c.294 0 .42-.126.462-.392l.126-.966c.042-.294-.112-.462-.406-.462H38.44zm10.39-.168c-2.072 0-3.122.924-3.402 3.22l-.35 2.842c-.294 2.282.616 3.444 2.674 3.444.574 0 1.316-.112 1.974-.308.266-.084.364-.21.392-.462l.112-.924c.028-.336-.154-.49-.462-.392-.532.168-1.064.266-1.512.266-.952 0-1.372-.434-1.232-1.498l.35-2.814c.154-1.204.616-1.596 1.568-1.596.392 0 .938.112 1.47.266.28.084.462-.028.504-.322l.126-.924c.042-.28-.07-.434-.336-.504-.672-.196-1.358-.294-1.876-.294zm4.944.168c-.266 0-.42.126-.462.406l-.112.966c-.042.28.112.448.392.448h1.974l-.84 6.902c-.042.28.126.448.406.448h1.12c.266 0 .42-.126.448-.406l.84-6.944h2.03c.266 0 .42-.126.448-.392l.126-.966c.042-.294-.112-.462-.406-.462h-5.964zm9.172 0c-.266 0-.42.126-.462.406l-1.022 8.316c-.028.28.126.448.42.448h4.424c.252 0 .42-.14.448-.406l.112-.966c.028-.294-.126-.448-.406-.448h-2.856l.224-1.932h2.632c.28 0 .42-.126.462-.406l.112-.952c.042-.294-.098-.448-.406-.448h-2.562l.224-1.792h2.898c.294 0 .42-.126.462-.392l.126-.966c.042-.294-.112-.462-.406-.462h-4.424zm10.138-.168c-.798 0-1.582.028-2.254.056-.266.014-.406.14-.448.406l-1.05 8.47c-.028.294.112.462.378.49.7.056 1.47.084 2.184.084 2.562 0 3.892-1.218 4.186-3.542l.252-2.016c.308-2.45-.91-3.948-3.248-3.948zm-.182 1.75c1.078 0 1.652.63 1.484 2.016l-.28 2.226c-.154 1.162-.854 1.75-1.904 1.75-.154 0-.448-.028-.742-.056l.728-5.908c.28-.014.546-.028.714-.028z" fill="#006cff"/><use stroke="#006cff" mask="url(#b)" stroke-width="4" xlink:href="#a"/></g></svg>';
            var realSVG = svgTemplate.replace(/#dfedff/g, config.backgroundColor).replace(/#006cff/g, config.color);
            renderDom(config, realSVG);
        };
    };
})();
