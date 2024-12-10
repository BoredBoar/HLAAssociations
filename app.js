function AppViewModel() {
    var B345text = `[{"DRB1":"DRB1*0101","DRB3/4/5":"x","DQB1":"DQB1*0501","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0102","DRB3/4/5":"x","DQB1":"DQB1*0501","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0103","DRB3/4/5":"x","DQB1":"DQB1*0501","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0103","DRB3/4/5":"x","DQB1":"DQB1*0301","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0301","DRB3/4/5":"DRB3*0101","DQB1":"DQB1*0201","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0301","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0201","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0302","DRB3/4/5":"DRB3*0101","DQB1":"DQB1*0402","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0401","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0301","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0401","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0302","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0402","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0302","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0403","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0302","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0403","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0301","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*0403","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0304","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0403","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0305","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0404","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0302","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0405","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0302","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0405","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0401","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0405","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0301","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*0405","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0402","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*0406","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0302","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0407","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0301","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0407","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0302","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0408","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0301","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0408","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0304","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*0410","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0402","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0411","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0302","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0411","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0402","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0701","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0202","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0701","DRB3/4/5":"DRB4*0103N","DQB1":"DQB1*0303","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0801","DRB3/4/5":"x","DQB1":"DQB1*0402","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0801","DRB3/4/5":"x","DQB1":"DQB1*0302","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0802","DRB3/4/5":"x","DQB1":"DQB1*0402","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0802","DRB3/4/5":"x","DQB1":"DQB1*0302","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0803","DRB3/4/5":"x","DQB1":"DQB1*0301","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0803","DRB3/4/5":"x","DQB1":"DQB1*0601","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0804","DRB3/4/5":"x","DQB1":"DQB1*0301","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0804","DRB3/4/5":"x","DQB1":"DQB1*0402","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0806","DRB3/4/5":"x","DQB1":"DQB1*0602","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*0807","DRB3/4/5":"x","DQB1":"DQB1*0402","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*0901","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0303","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*0901","DRB3/4/5":"DRB4*0101","DQB1":"DQB1*0202","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1001","DRB3/4/5":"x","DQB1":"DQB1*0501","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1101","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0301","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1101","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0602","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1101","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0302","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1101","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0202","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1101","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0502","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1102","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0301","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1103","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0301","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1104","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0301","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1104","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0603","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1118","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0301","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1201","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0301","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1201","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0303","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1201","DRB3/4/5":"DRB3*0101","DQB1":"DQB1*0301","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1201","DRB3/4/5":"DRB3*0101","DQB1":"DQB1*0501","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1201","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0501","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1202","DRB3/4/5":"DRB3*0301","DQB1":"DQB1*0301","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1202","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0301","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1301","DRB3/4/5":"DRB3*0101","DQB1":"DQB1*0603","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1301","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0603","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1301","DRB3/4/5":"DRB3*0101","DQB1":"DQB1*0303","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1301","DRB3/4/5":"DRB3*0101","DQB1":"DQB1*0501","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1301","DRB3/4/5":"DRB3*0301","DQB1":"DQB1*0501","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1301","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0303","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1301","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0602","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1302","DRB3/4/5":"DRB3*0301","DQB1":"DQB1*0604","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1302","DRB3/4/5":"DRB3*0301","DQB1":"DQB1*0609","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1302","DRB3/4/5":"DRB3*0301","DQB1":"DQB1*0501","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1302","DRB3/4/5":"DRB3*0301","DQB1":"DQB1*0502","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1302","DRB3/4/5":"DRB3*0101","DQB1":"DQB1*0603","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1303","DRB3/4/5":"DRB3*0101","DQB1":"DQB1*0301","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1304","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0301","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1305","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0301","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1401","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0503","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1401","DRB3/4/5":"DRB3*0201","DQB1":"DQB1*0503","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1402","DRB3/4/5":"DRB3*0101","DQB1":"DQB1*0301","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1403","DRB3/4/5":"DRB3*0101","DQB1":"DQB1*0301","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1404","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0503","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1405","DRB3/4/5":"DRB3*0202","DQB1":"DQB1*0503","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1406","DRB3/4/5":"DRB3*0101","DQB1":"DQB1*0301","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1501","DRB3/4/5":"DRB5*0101","DQB1":"DQB1*0602","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1501","DRB3/4/5":"DRB5*0101","DQB1":"DQB1*0502","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1501","DRB3/4/5":"DRB5*0101","DQB1":"DQB1*0601","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1501","DRB3/4/5":"DRB5*0101","DQB1":"DQB1*0603","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1501","DRB3/4/5":"DRB5*0101","DQB1":"DQB1*0501","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1502","DRB3/4/5":"DRB5*0102","DQB1":"DQB1*0601","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1502","DRB3/4/5":"DRB5*0101","DQB1":"DQB1*0601","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1502","DRB3/4/5":"DRB5*0101","DQB1":"DQB1*0501","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1502","DRB3/4/5":"DRB5*0102","DQB1":"DQB1*0501","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1502","DRB3/4/5":"DRB5*0102","DQB1":"DQB1*0601","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1503","DRB3/4/5":"DRB5*0101","DQB1":"DQB1*0602","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1503","DRB3/4/5":"x","DQB1":"DQB1*0602","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1503","DRB3/4/5":"DRB5*0101","DQB1":"DQB1*0202","FREQUENCY OVERALL":"LC"},{"DRB1":"DRB1*1506","DRB3/4/5":"DRB5*0101","DQB1":"DQB1*0502","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1601","DRB3/4/5":"DRB5*0202","DQB1":"DQB1*0502","FREQUENCY OVERALL":"VF"},{"DRB1":"DRB1*1602","DRB3/4/5":"DRB5*0202","DQB1":"DQB1*0502","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1602","DRB3/4/5":"DRB5*0202","DQB1":"DQB1*0301","FREQUENCY OVERALL":"F"},{"DRB1":"DRB1*1602","DRB3/4/5":"DRB5*0101","DQB1":"DQB1*0502","FREQUENCY OVERALL":"LC"}]`
    var B345data = JSON.parse(B345text)
    console.log(B345data)


    var self = this
    self.count = ko.observable(8)

}

// Activates knockout.js
ko.applyBindings(new AppViewModel());