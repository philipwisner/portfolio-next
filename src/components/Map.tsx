/* Imports */
import * as am5index from '@amcharts/amcharts5/index';
import * as am5map from '@amcharts/amcharts5/map';
import * as am5 from '@amcharts/amcharts5';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { useEffect } from 'react';
import countries from '@/data/countries';
import { CountryType } from './CountryGroup';

function Map() {
  useEffect(() => {
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new('chartdiv');

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    let chart = root?.container?.children?.push(
      am5map?.MapChart?.new(root, {
        panX: 'translateX',
        panY: 'translateY',
        projection: am5map?.geoMercator(),
      })
    );

    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        fill: am5.color(0xdadada),
        stroke: am5.color(0xffffff),
        exclude: ['AQ'],
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
      toggleKey: 'active',
      interactive: true,
      templateField: 'polygonSettings',
    });

    // @ts-ignore
    const visitedCountries: Array = countries.reduce(
      // @ts-ignore
      (acc: CountryType[], country: CountryType) => {
        if (country.visited) {
          return [
            ...acc,
            {
              id: country.id,
              polygonSettings: {
                fill: am5.color(0x1845ad),
              },
            },
          ];
        }
        return acc;
      },
      []
    );

    // @ts-ignore
    polygonSeries.data.setAll(visitedCountries);

    polygonSeries.mapPolygons.template.states.create('hover', {
      fill: root.interfaceColors.get('primaryButtonHover'),
    });

    polygonSeries.mapPolygons.template.states.create('active', {
      fill: root.interfaceColors.get('primaryButtonHover'),
    });

    // @ts-ignore
    let previousPolygon;

    polygonSeries.mapPolygons.template.on('active', function (active, target) {
      // @ts-ignore
      if (previousPolygon && previousPolygon != target) {
        previousPolygon.set('active', false);
      }
      // @ts-ignore
      if (target.get('active')) {
        // @ts-ignore
        polygonSeries.zoomToDataItem(target.dataItem);
      } else {
        chart.goHome();
      }
      previousPolygon = target;
    });

    // Add zoom control
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
    let zoomControl = chart.set(
      'zoomControl',
      am5map.ZoomControl.new(root, {})
    );
    zoomControl.homeButton.set('visible', true);

    // Set clicking on "water" to zoom out
    // @ts-ignore
    chart.chartContainer.get('background').events.on('click', function () {
      chart.goHome();
    });

    // Make stuff animate on load
    chart.appear(1000, 100);
    return () => root.dispose();
  }, []);

  return <div id="chartdiv" className="w-full h-[450px]"></div>;
}

export default Map;
