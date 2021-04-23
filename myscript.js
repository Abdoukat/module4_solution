var names=new Array();
names[0]="yamanda";
names[1]="robin";
names[2]="peeter";
names[3]="john";
names[4]="smith";
names[5]="anny";
names[6]="harry";
names[7]="james";
names[8]="jordan";
names[9]="keven";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}