const XLSX = require("node-xlsx");
const fs = require('fs-extra');
const path = require('path');

// 生成模板
async function generateTemplate(filePath) {
    const content = await fs.readFileSync(filePath, 'utf-8');
    const template = content.replace(/(\w*)?: ('.*')/g, '$1: {{$1}}');
    // const templatePath = path.join(__dirname, 'template.ts');
    // await fs.writeFileSync(templatePath, template);
    return template;
}

// 读取xls
function readXLSX(filePath){
    const xls = XLSX.parse(filePath);
    const data = xls[0].data;
    const obj = {};
    const lang = data[0];
    const value = data.slice(1);
    lang.forEach((e1,i1) => {
        if(e1){
            e1 = e1.toLowerCase();
            e1 = e1.replace(/-/,'_');
            obj[e1]={locale: e1};
            value.forEach((e2,i2) => {
                if(e2[0]){
                    obj[e1][e2[0]] = e2[i1]
                } 
            })
        } 
    });
    
    delete obj.key;
    return obj;
}

// 裂开
async function startFun() {
    const templateContent = await generateTemplate(path.join(__dirname, '_zh_cn.ts'));
    const i18nContent = readXLSX('./FastTransfer.xls');
    for(const lang in i18nContent){
        const val = i18nContent[lang];
        let res = templateContent;
        for(const key in val){
            res = res.replace(`{{${key}}}`, `'${val[key].replace(/\n|\r/g, '')}'`)
            res = res.replace(`__${key}__`, val[key])
            res = res.replace(`__${key}__`, val[key])
        }
        await fs.writeFileSync(path.join(__dirname,'i18n',`_${lang}.ts`), res);
    }
}

startFun();