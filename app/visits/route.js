import AbstractModuleRoute from 'hospitalrun/routes/abstract-module-route';
export default AbstractModuleRoute.extend({
    additionalModels: [{
        name: 'clinicList',
        findArgs: ['lookup','clinic_list']
    }, { 
        name: 'physicianList',
        findArgs: ['lookup','physician_list']
    },  {
        name: 'locationList',
        findArgs: ['lookup','location_list']
    }],
    modelName: 'visit',
    moduleName: 'visits',
    newButtonText: '+ new visit',
    sectionTitle: 'Visits'
   
});