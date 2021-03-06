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
                cfo.positionalDimensions = 'top: 20px; left: 20px;'.replace('top', cfo.verticalPlacement).replace('left', cfo.horizontalPlacement);
            };
            cfo.color = window.palette[splited[2].split('-')[0]] || ('#' + window.splited[2].split('-')[0]);
            cfo.backgroundColor = window.palette[splited[2].split('-')[1]] || ('#' +splited[2].split('-')[1]);
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
            var svgTemplate = '<svg width="60" height="60" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" style="background:#dfedff;display:block;"><g fill="#006cff" fill-rule="evenodd"><path d="M49.553 19.585L45.006 16l-4.75 3.746-.246.198 4.996 3.984 5.012-3.984-.465-.36zm17.23 13.903L44.993 50.67 23.216 33.5 20 36.082 44.993 55.79 70 36.072l-3.217-2.584zm-21.79 1.395l-11.857-9.35-3.217 2.583 15.073 11.887L60.08 28.106l-3.217-2.584-11.87 9.36zM13.05 66.175c-.285 0-.45.135-.495.435l-1.095 8.91c-.03.3.135.48.435.48h1.2c.3 0 .45-.135.495-.435l.405-3.585h2.16c.3 0 .45-.135.495-.435l.12-1.02c.045-.315-.105-.48-.435-.48H14.25l.24-1.92h3.105c.315 0 .45-.135.495-.42l.135-1.035c.045-.315-.12-.495-.435-.495h-4.74zm7.875 0c-.285 0-.45.135-.495.435l-1.095 8.91c-.03.3.135.48.45.48h4.74c.27 0 .45-.15.48-.435l.12-1.035c.03-.315-.135-.48-.435-.48h-3.06l.24-2.07h2.82c.3 0 .45-.135.495-.435l.12-1.02c.045-.315-.105-.48-.435-.48h-2.745l.24-1.92h3.105c.315 0 .45-.135.495-.42l.135-1.035c.045-.315-.12-.495-.435-.495h-4.74zm10.2 0c-.27 0-.435.105-.54.36l-3.69 8.94c-.12.315.015.525.36.525h1.26c.27 0 .42-.105.525-.375.195-.51.39-1.02.57-1.545h2.82c.06.48.105.975.15 1.485.015.285.18.435.465.435h1.305c.33 0 .48-.18.42-.495l-1.485-8.91c-.045-.285-.21-.42-.51-.42h-1.65zm.615 1.71c.195 1.485.375 2.955.525 4.425h-2.04c.525-1.47 1.02-2.94 1.515-4.425zm4.92-1.71c-.285 0-.45.135-.495.435l-.12 1.035c-.045.3.12.48.42.48h2.115l-.9 7.395c-.045.3.135.48.435.48h1.2c.285 0 .45-.135.48-.435l.9-7.44h2.175c.285 0 .45-.135.48-.42l.135-1.035c.045-.315-.12-.495-.435-.495h-6.39zm14.055 0c-.285 0-.435.135-.48.435l-.78 6.3c-.12.93-.585 1.335-1.365 1.335-.81 0-1.275-.51-1.17-1.38l.78-6.195c.045-.315-.12-.495-.435-.495H46.08c-.3 0-.45.135-.495.435l-.765 6.15c-.27 2.13.84 3.42 3.135 3.42 2.205 0 3.345-1.08 3.645-3.405l.765-6.105c.03-.315-.135-.495-.435-.495h-1.215zm6.93-.18c-.51 0-1.38.03-2.145.075-.39.03-.57.165-.615.495l-1.11 8.955c-.03.3.135.48.435.48h1.2c.285 0 .45-.135.495-.435l.405-3.495c.345.045.63.06.915.06.495 1.065.9 2.085 1.41 3.495.09.27.27.375.525.375h1.35c.345 0 .48-.225.345-.54l-1.68-3.78c1.005-.465 1.635-1.32 1.785-2.295l.045-.285c.27-1.71-.99-3.105-3.36-3.105zm-.075 1.86c1.005 0 1.455.48 1.335 1.26l-.015.105c-.12.735-.615 1.155-1.635 1.155-.195 0-.36 0-.72-.045l.285-2.445c.225-.015.57-.03.75-.03zm6.84-1.68c-.285 0-.45.135-.495.435l-1.095 8.91c-.03.3.135.48.45.48h4.74c.27 0 .45-.15.48-.435l.12-1.035c.03-.315-.135-.48-.435-.48h-3.06l.24-2.07h2.82c.3 0 .45-.135.495-.435l.12-1.02c.045-.315-.105-.48-.435-.48H65.61l.24-1.92h3.105c.315 0 .45-.135.495-.42l.135-1.035c.045-.315-.12-.495-.435-.495h-4.74zm10.455-.18c-.855 0-1.695.03-2.415.06-.285.015-.435.15-.48.435l-1.125 9.075c-.03.315.12.495.405.525.75.06 1.575.09 2.34.09 2.745 0 4.17-1.305 4.485-3.795l.27-2.16c.33-2.625-.975-4.23-3.48-4.23zm-.195 1.875c1.155 0 1.77.675 1.59 2.16l-.3 2.385c-.165 1.245-.915 1.875-2.04 1.875-.165 0-.48-.03-.795-.06l.78-6.33c.3-.015.585-.03.765-.03z"/></g></svg>';
            var realSVG = svgTemplate.replace(/#dfedff/g, config.backgroundColor).replace(/#006cff/g, config.color);
            renderDom(config, realSVG);
        };
    };
})();
