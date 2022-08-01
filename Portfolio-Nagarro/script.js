$( document ).ready( function() {

    var entries = [ 
        
        { label: 'HTML'},
        { label: 'Javascript'},
        { label: 'CSS'},
        { label: 'jQuery'},
        { label: 'C Language'},
        { label: 'NPM'},
        { label: 'C++'},
        { label: 'Problem Solving'},
        { label: 'Git' },
        { label: 'Github' },
        { label: 'React-JS,' },
        { label: 'Rest,' },
        { label: 'JSON,' },
        { label: 'OOPs' },
        { label: 'Mongo DB'},
        { label: 'SQL' },
        { label: 'Node.js' },
        { label: 'Express'},
        { label: 'Leadership' },
        { label: 'Python'},
        { label: 'Java'},
        { label: 'Bootstrap' },
        { label: 'English'},
        { label: 'Hindi'},
        { label: 'Communication'},
        { label: 'DSA' },
        { label: 'Teamwork' },
        { label: 'MySQL'},

    ];

    var settings = {

        entries: entries,
        width: 780,
        height: 780,
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'rgb(21, 21, 21)',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 1,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '20',
        fontColor: '#08fdd8',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $( '#tag-cloud' ).svg3DTagCloud( settings );

} );