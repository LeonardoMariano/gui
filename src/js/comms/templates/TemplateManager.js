class TemplateManager {
  constructor() {
    this.devices = [
      { id: '8c8c97c4-eca6-11e6-bd48-17456515ad79', label: 'MQTT sample' , icon: ''},
      { id: '8c8cdb8a-eca6-11e6-b468-77508033a9fa', label: 'CoAP sample' , icon: ''},
      { id: '8c8d2202-eca6-11e6-a01e-3769c6143886', label: 'extruder'    , icon: ''},
      { id: '8c8d68de-eca6-11e6-bf3c-479aa417687a', label: 'chiller'     , icon: ''},
      { id: '8c8da93e-eca6-11e6-b6ec-477e9c191e36', label: 'fan'         , icon: ''},
      { id: '8c8ded7c-eca6-11e6-8355-839d23fa6c74', label: 'fridge'      , icon: ''},
      { id: '8c8e2fc6-eca6-11e6-8aee-c3791a748473', label: 'Queue Panel' , icon: ''},
      { id: '8c8e6d74-eca6-11e6-b625-9f771175799d', label: 'totem'       , icon: ''},
      { id: '9ff74c1e-eca6-11e6-a3b3-bfb1b0ff2c3c', label: 'HTTP sample' , icon: ''}
    ];

    this.details = {};
  }

  getDevices() {
    // @TODO call webservice
    return this.devices;
  }

  getDevice(id) {
    if (id in this.details) {
      return this.details[id];
    } else {
      let data = this.devices.filter(function(d) {
        return d.id == id;
      });
      if (data && data[0]) { return data[0]; }
    }
    return undefined;
  }

  setDevice(detail) {
    this.details[detail.id] = detail;
  }

  addDevice(d) {
    // this will be generated by the backend anyway....
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

    d.id = guid();

    // @TODO call webservice
    this.devices.push(d);
    return this.devices;
  }

  deleteDevice(id) {
    for (var i = 0; i < this.devices.length; i++) {
        if (this.devices[i].id == id) {
          this.devices.splice(i, 1);
        }
    }
    return this.devices;
  }


  setDevice(id, device) {
    for (var i = 0; i < this.devices.length; i++) {
        if (this.devices[i].id == id) {
          this.devices[i] = device;
        }
    }
    return this.devices;
  }
}

var templateManager = new TemplateManager();

export default templateManager;
