const electrumServers = require('../electrumjs/electrumServers');

module.exports = (shepherd) => {
  shepherd.startSPV = (coin) => {
    if (coin === 'KMD+REVS+JUMBLR') {
      shepherd.addElectrumCoin('KMD');
      shepherd.addElectrumCoin('REVS');
      shepherd.addElectrumCoin('JUMBLR');
    } else {
      if (process.argv.indexOf('spvcoins=all/add-all') > -1) {
        for (let key in electrumServers) {
          shepherd.addElectrumCoin(electrumServers[key].abbr);
        }
      } else {
        shepherd.addElectrumCoin(coin);
      }
    }
  }

  shepherd.startKMDNative = (selection, isManual) => {
    if (isManual) {
      shepherd.kmdMainPassiveMode = true;
    }

    if (selection === 'KMD') {
      const herdData = {
        'ac_name': 'komodod',
        'ac_options': [
          '-daemon=0',
          '-addnode=78.47.196.146',
        ],
      };

      const options = {
        url: `http://127.0.0.1:${shepherd.appConfig.agamaPort}/shepherd/herd`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          herd: 'komodod',
          options: herdData,
          token: shepherd.appSessionHash,
        }),
      };

      shepherd.request(options, (error, response, body) => {
        if (response &&
            response.statusCode &&
            response.statusCode === 200) {
          //resolve(body);
        } else {
          //resolve(body);
        }
      });
    } else if (selection === 'REVS') {
      const herdData = {
        'ac_name': 'REVS',
        'ac_options': [
          '-daemon=0',
          '-server',
          `-ac_name=REVS`,
          '-addnode=78.47.196.146',
          '-ac_supply=1300000'
        ]
      };

      const options = {
        url: `http://127.0.0.1:${shepherd.appConfig.agamaPort}/shepherd/herd`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          herd: 'komodod',
          options: herdData,
          token: shepherd.appSessionHash,
        }),
      };

      shepherd.request(options, (error, response, body) => {
        if (response &&
            response.statusCode &&
            response.statusCode === 200) {
          //resolve(body);
        } else {
          //resolve(body);
        }
      });
    } else if (selection === 'JUMRLR') {
      const herdData = {
        'ac_name': 'JUMRLR',
        'ac_options': [
          '-daemon=0',
          '-server',
          `-ac_name=JUMRLR`,
          '-addnode=78.47.196.146',
          '-ac_supply=999999'
        ]
      };

      const options = {
        url: `http://127.0.0.1:${shepherd.appConfig.agamaPort}/shepherd/herd`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          herd: 'komodod',
          options: herdData,
          token: shepherd.appSessionHash,
        }),
      };

      shepherd.request(options, (error, response, body) => {
        if (response &&
            response.statusCode &&
            response.statusCode === 200) {
          //resolve(body);
        } else {
          //resolve(body);
        }
      });
    } else if (selection === 'MNZ') {
      const herdData = {
        'ac_name': 'MNZ',
        'ac_options': [
          '-daemon=0',
          '-server',
          `-ac_name=MNZ`,
          '-addnode=78.47.196.146',
          '-ac_supply=257142858'
        ]
      };

      const options = {
        url: `http://127.0.0.1:${shepherd.appConfig.agamaPort}/shepherd/herd`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          herd: 'komodod',
          options: herdData,
          token: shepherd.appSessionHash,
        }),
      };

      shepherd.request(options, (error, response, body) => {
        if (response &&
            response.statusCode &&
            response.statusCode === 200) {
          //resolve(body);
        } else {
          //resolve(body);
        }
      });
    } else if (selection === 'BTCH') {
      const herdData = {
        'ac_name': 'BTCH',
        'ac_options': [
          '-daemon=0',
          '-server',
          `-ac_name=BTCH`,
          '-addnode=78.47.196.146',
          '-ac_supply=20998641'
        ]
      };

      const options = {
        url: `http://127.0.0.1:${shepherd.appConfig.agamaPort}/shepherd/herd`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          herd: 'komodod',
          options: herdData,
          token: shepherd.appSessionHash,
        }),
      };

      shepherd.request(options, (error, response, body) => {
        if (response &&
            response.statusCode &&
            response.statusCode === 200) {
          //resolve(body);
        } else {
          //resolve(body);
        }
      });
    } else if (selection === 'VERS') {
      // TODO: The usual fixing of IP etc. for Verus
        const herdData = {
            'ac_name': 'VRSC',
            'ac_options': [
                '-daemon=0',
                '-server',
                '-ac_name=VRSC',
                '-addnode=78.47.196.146',
                '-ac_supply=100000000'
            ]
        };

        const options = {
            url: `http://127.0.0.1:${shepherd.appConfig.agamaPort}/shepherd/herd`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                herd: 'komodod',
                options: herdData,
                token: shepherd.appSessionHash,
            }),
        };

        shepherd.request(options, (error, response, body) => {
            if (response &&
                response.statusCode &&
                response.statusCode === 200) {
                //resolve(body);
            } else {
                //resolve(body);
            }
        });
    }  else if (selection === 'VERUSTEST') {
        const herdData = {
            'ac_name': 'VERUSTEST',
            'ac_options': [
                '-daemon=0',
                '-server',
                '-ac_name=VERUSTEST',
                '-ac_algo=verushash', 
                '-ac_supply=0', 
                '-ac_eras=3', 
                '-ac_reward=0,38400000000,2400000000', 
                '-ac_halving=2,5,1440', 
                '-ac_decay=100000000,0,0',
                '-ac_end=14,44,0',
                '-addnode=192.168.0.185',
                '-ac_timelockgte=19200000000',
                '-ac_timeunlockfrom=720', 
                '-ac_timeunlockto=1440',
                '-gen',
            ]
        };

        const options = {
            url: `http://127.0.0.1:${shepherd.appConfig.agamaPort}/shepherd/herd`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                herd: 'komodod',
                options: herdData,
                token: shepherd.appSessionHash,
            }),
        };

        shepherd.request(options, (error, response, body) => {
            if (response &&
                response.statusCode &&
                response.statusCode === 200) {
                //resolve(body);
            } else {
                //resolve(body);
            }
        });
}
    else {
      const herdData = [{
        'ac_name': 'komodod',
        'ac_options': [
          '-daemon=0',
          '-addnode=78.47.196.146',
        ]
      }, {
        'ac_name': 'REVS',
        'ac_options': [
          '-daemon=0',
          '-server',
          `-ac_name=REVS`,
          '-addnode=78.47.196.146',
          '-ac_supply=1300000'
        ]
      }, {
        'ac_name': 'JUMBLR',
        'ac_options': [
          '-daemon=0',
          '-server',
          `-ac_name=JUMBLR`,
          '-addnode=78.47.196.146',
          '-ac_supply=999999'
        ]
      }];

      for (let i = 0; i < herdData.length; i++) {
        setTimeout(() => {
          const options = {
            url: `http://127.0.0.1:${shepherd.appConfig.agamaPort}/shepherd/herd`,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              herd: 'komodod',
              options: herdData[i],
              token: shepherd.appSessionHash,
            }),
          };

          shepherd.request(options, (error, response, body) => {
            if (response &&
                response.statusCode &&
                response.statusCode === 200) {
              //resolve(body);
            } else {
              //resolve(body);
            }
          });
        }, 100);
      }
    }
  };

  return shepherd;
};