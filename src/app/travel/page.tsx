'use client';
import Header from '@/components/Header';
import Script from 'next/script';

// export const metadata: Metadata = {
//   title: "Philip Wisner - Travel",
// };

export default function Travel() {
  // useEffect(() => {
  //   console.log('page loaded')
  //   setTimeout(() => {
  //     const map = AmCharts.makeChart("mapdiv", {
  //       type: "map",
  //       theme: "dark",
  //       projection: "mercator",
  //       panEventsEnabled: true,
  //       backgroundColor: "#FFFFFF",
  //       backgroundAlpha: 1,
  //       zoomControl: {
  //         zoomControlEnabled: true,
  //       },
  //       dataProvider: {
  //         map: "worldHigh",
  //         getAreasFromMap: true,
  //         areas: [
  //           {
  //             id: "AL",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "AT",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "BA",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "BE",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "BG",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "HR",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "CZ",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "FR",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "DE",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "GR",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "DO",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "HU",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "IE",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "IT",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "XK",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "MK",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "ME",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "VA",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "PT",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "RS",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "SK",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "SI",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "ES",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "TR",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "GB",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "BS",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "BZ",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "CA",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "CR",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "SV",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "GT",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "HN",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "MX",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "NI",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "PA",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "PR",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "US",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "AR",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "BO",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "BR",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "CL",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "CO",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "EC",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "GY",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "PY",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "PE",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "SR",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "UY",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "MA",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "CN",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "JP",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "TH",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "TT",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "VI",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "GI",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "AG",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "BB",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "AN",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "DM",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "GD",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "KN",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "LC",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "TC",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "CW",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "BQ",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "VI",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "LU",
  //             showAsSelected: true,
  //           },
  //           {
  //             id: "NL",
  //             showAsSelected: true,
  //           },
  //         ],
  //       },
  //       areasSettings: {
  //         autoZoom: true,
  //         color: "#D1D1D1",
  //         colorSolid: "#1845AD",
  //         selectedColor: "#1845AD",
  //         outlineColor: "#FFFFFF",
  //         rollOverColor: "#1845AD",
  //         rollOverOutlineColor: "#FFFFFF",
  //       },
  //     })
  //   }, 1)

  // }, [])

  return (
    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9 content" id="content">
      <Header name="Travel" />
      <Script
        src="https://www.amcharts.com/lib/3/ammap.js"
        type="text/javascript"
      ></Script>
      <Script
        src="https://www.amcharts.com/lib/3/maps/js/worldHigh.js"
        type="text/javascript"
      ></Script>
      <Script
        src="https://www.amcharts.com/lib/3/themes/dark.js"
        type="text/javascript"
      ></Script>
      <div
        id="mapdiv"
        style={{ width: '1000px', height: '450px' }}
        className="img-responsive center-block"
      ></div>
      <div
        className="img-responsive center-block"
        style={{
          width: '1000px',
          fontSize: '70%',
          padding: '5px 0',
          textAlign: 'center',
          backgroundColor: '#ffffff',
          marginTop: '1px',
          color: '#d1d1d1',
        }}
      ></div>
      <div className="country-number">
        <h2>
          <span>61</span> countries visited so far
        </h2>
      </div>
      <div className="panel-group country-list" id="accordion">
        <div className="panel panel-">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapse1"
              >
                North America
              </a>
            </h4>
          </div>
          <div id="collapse1" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li>Antigua and Barbuda</li>
                <li>Bahamas</li>
                <li>Barbados</li>
                <li>Belize</li>
                <li>Bonaire</li>
                <li>Canada</li>
                <li>Costa Rica</li>
                <li>Curaçao</li>
                <li>Dominica</li>
                <li>Dominican Republic</li>
                <li>El Salvador</li>
                <li>Grenada</li>
                <li>Guatemala</li>
                <li>Honduras</li>
                <li>Mexico</li>
                <li>Nicaragua</li>
                <li>Panama</li>
                <li>Puerto Rico</li>
                <li>Saint Kitts and Nevis</li>
                <li>Saint Lucia</li>
                <li>Trinidad and Tobago</li>
                <li>Turks and Caicos</li>
                <li>United States</li>
                <li>United States Virgin Islands</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapse2"
              >
                South America
              </a>
            </h4>
          </div>
          <div id="collapse2" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li>Argentina</li>
                <li>Bolivia</li>
                <li>Brazil</li>
                <li>Chile</li>
                <li>Colombia</li>
                <li>Ecuador</li>
                <li>Guyana</li>
                <li>Paraguay</li>
                <li>Peru</li>
                <li>Suriname</li>
                <li>Uruguay</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapse3"
              >
                Europe
              </a>
            </h4>
          </div>
          <div id="collapse3" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li>Albania</li>
                <li>Austria</li>
                <li>Belgium</li>
                <li>Bosnia and Herzegovina</li>
                <li>Bulgaria</li>
                <li>Croatia</li>
                <li>Czechia</li>
                <li>France</li>
                <li>Germany</li>
                <li>Greece</li>
                <li>Hungary</li>
                <li>Ireland</li>
                <li>Italy</li>
                <li>Kosovo</li>
                <li>Luxembourg</li>
                <li>Montenegro</li>
                <li>Netherlands</li>
                <li>North Macedonia</li>
                <li>Portugal</li>
                <li>Serbia</li>
                <li>Slovakia</li>
                <li>Slovenia</li>
                <li>Spain</li>
                <li>Turkey</li>
                <li>United Kingdom</li>
                <li>Vatican City</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapse4"
              >
                Africa
              </a>
            </h4>
          </div>
          <div id="collapse4" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li>Morocco</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapse5"
              >
                Asia
              </a>
            </h4>
          </div>
          <div id="collapse5" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li>China</li>
                <li>Japan</li>
                <li>Thailand</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapse6"
              >
                Oceania
              </a>
            </h4>
          </div>
          <div id="collapse6" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li>None yet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="gap"></div>
    </div>
  );
}
