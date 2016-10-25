$(function () {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Gun Deaths Worldwide'
        },
        subtitle: {
            text: 'Source: <a href="http://www.motherjones.com/politics/2014/12/gun-violence-car-deaths-charts">Mother Jones</a>'
        },
        xAxis: {
            categories: ['USA', 'Finland', 'Switzerland', 'Austria', 'France', 'Canada', 'Norway', 'Israel', 'Belgium', 'Sweden', 'Denmark', 'Italy'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' Deaths/100,000 population'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 20,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Suicide',
            data: [2.85, 0.35, 0.32, 0.09, 0.23, 0.5]
        }, {
            name: 'Homicide',
            data: [6.3, 2.75, 2.6, 2.1, 2, 2.2]
     
        }]
    });
});
