console.log("Data Driven Failure Analysis of IIoT Device");
console.log("\n");


///// Declare Global Variable  /////

const fs = require('fs');

var servH1 = 0;
var servH2 = 0;
var deviH1 = 0;
var deviH2 = 0;

var servM1 = 0;
var servM2 = 0;
var deviM1 = 0;
var deviM2 = 0;

var servS1 = 0;
var servS2 = 0;
var deviS1 = 0;
var deviS2 = 0;

var difH1 = 0;
var difH2 = 0;

var difM1 = 0;
var difM2 = 0;

var difS1 = 0;
var difS2 = 0;

var train_ratio = 0.5;


// Input Data Uplink Latency //

var Train_up = [[0],[0],[0],[0]];
var amt_uplink = 700;

var uplatency  = 0; 

var dataUp = fs.readFileSync("Finaluplink_filter2.csv");


var strUp = String.fromCharCode.apply(String, dataUp);
const splitstrUp  = strUp.split(/\r?\n/);

// Pre Data Processing //

var num1 = 0;

for(num1 ; num1 < amt_uplink; num1++)
{
    var excelrow = num1 +1;
    //console.log("Data: " +excelrow );

    servH1 = ( splitstrUp[excelrow][25] );
    servH2 = ( splitstrUp[excelrow][26] );
    deviH1 = ( splitstrUp[excelrow][0] );
    deviH2 = ( splitstrUp[excelrow][1] );

    servM1 = ( splitstrUp[excelrow][28] );
    servM2 = ( splitstrUp[excelrow][29] );
    deviM1 = ( splitstrUp[excelrow][3] );
    deviM2 = ( splitstrUp[excelrow][4] );

    servS1 = ( splitstrUp[excelrow][31] );
    servS2 = ( splitstrUp[excelrow][32] );
    deviS1 = ( splitstrUp[excelrow][6] );
    deviS2 = ( splitstrUp[excelrow][7] );


    //console.log("Server Time :" +servH1 +servH2 +":" +servM1 +servM2 +":" +servS1 +servS2 +"   " +"Device Time :" +deviH1 +deviH2 +":" +deviM1 +deviM2 +":" +deviS1 +deviS2);


    if(servS2 >= deviS2 )
    {
        difS2 = servS2 - deviS2;
        if(servS1 >= deviS1 )
        {
            difS1 = servS1 - deviS1;
            if(servM2 >= deviM2)
            {
                difM2 = servM2 - deviM2;
                if(servM1 >= deviM1)
                {
                    difM1 = servM1 - deviM1;
                }
                else // M1
                {
                    difS1 = 6 - (deviS1 - servS1);
                    servM1 = servM1 - 1; 
                }
            }
            else //M2
            {
                difM2 = (servM2 - deviM2) + 10;
                servM1 = servM1 - 1;
                if(servM1 >= deviM1)
                {
                    difM1 = servM1 - deviM1;
                }
                else // M1
                {
                    difS1 = 6 - (deviS1 - servS1);
                    servM1 = servM1 - 1; 
                }
            }
        }
        else //s1
        {
            difS1 = 6 - (deviS1 - servS1);
            servM2 = servM2 - 1;
            if(servM2 >= deviM2)
            {
                difM2 = servM2 - deviM2;
                if(servM1 >= deviM1)
                {
                    difM1 = servM1 - deviM1;
                }
                else // M1
                {
                    difS1 = 6 - (deviS1 - servS1);
                    servM1 = servM1 - 1; 
                }
            }
            else //M2
            {
                difM2 = (servM2 - deviM2) + 10;
                servM1 = servM1 - 1;
                if(servM1 >= deviM1)
                {
                    difM1 = servM1 - deviM1;
                }
                else // M1
                {
                    difS1 = 6 - (deviS1 - servS1);
                    servM1 = servM1 - 1; 
                }
            }
        }    
    }
    else // S2
    {
        difS2 = (servS2 - deviS2) + 10;
        servS1 = servS1 - 1;
        if(servS1 >= deviS1 )
        {
            difS1 = servS1 - deviS1;
            if(servM2 >= deviM2)
            {
                difM2 = servM2 - deviM2;
                if(servM1 >= deviM1)
                {
                    difM1 = servM1 - deviM1;
                }
                else // M1
                {
                    difS1 = 6 - (deviS1 - servS1);
                    servM1 = servM1 - 1; 
                }
            }
            else //M2
            {
                difM2 = (servM2 - deviM2) + 10;
                servM1 = servM1 - 1;
                if(servM1 >= deviM1)
                {
                    difM1 = servM1 - deviM1;
                }
                else // M1
                {
                    difS1 = 6 - (deviS1 - servS1);
                    servM1 = servM1 - 1; 
                }
            }
        }
        else //S1
        {
            difS1 = 6 - (deviS1 - servS1);
            servM2 = servM2 - 1;
            if(servM2 >= deviM2)
            {
                difM2 = servM2 - deviM2;
                if(servM1 >= deviM1)
                {
                    difM1 = servM1 - deviM1;
                }
                else // M1
                {
                    difS1 = 6 - (deviS1 - servS1);
                    servM1 = servM1 - 1; 
                }
            }
            else //M2
            {
                difM2 = (servM2 - deviM2) + 10;
                servM1 = servM1 - 1;
                if(servM1 >= deviM1)
                {
                    difM1 = servM1 - deviM1;
                }
                else // M1
                {
                    difS1 = 6 - (deviS1 - servS1);
                    servM1 = servM1 - 1; 
                }
            }
        }
    }



    uplatency =  (difM1 * 600) + (difM2 * 60) + (difS1 * 10) + difS2 - 60 ; // **** -60s
    Train_up [0][num1] = uplatency;
    //console.log("uplatency = " +Train_up [0][num1] +" s");
}







// Input Data Downlink Latency //

var Train_down = [[0],[0],[0],[0]];
var amt_downlink = 86;

var downlatency  = 0; 

var dataDown = fs.readFileSync("Finaldownlink_filter.csv");
//var json = data.toString();//

var strDown = String.fromCharCode.apply(String, dataDown);
const splitstrDown  = strDown.split(/\r?\n/);

// Pre Data Processing //

var num2 = 0;

for(num2 ; num2 < amt_downlink; num2++)
{
    var excelrow = num2 +1;
    //console.log("Data: " +excelrow );

    servH1 = ( splitstrDown[excelrow][51] );
    servH2 = ( splitstrDown[excelrow][52] );
    deviH1 = ( splitstrDown[excelrow][16] );
    deviH2 = ( splitstrDown[excelrow][17] );

    servM1 = ( splitstrDown[excelrow][54] );
    servM2 = ( splitstrDown[excelrow][55] );
    deviM1 = ( splitstrDown[excelrow][19] );
    deviM2 = ( splitstrDown[excelrow][20] );

    servS1 = ( splitstrDown[excelrow][57] );
    servS2 = ( splitstrDown[excelrow][58] );
    deviS1 = ( splitstrDown[excelrow][22] );
    deviS2 = ( splitstrDown[excelrow][23] );


    //console.log("Server Time :" +servH1 +servH2 +":" +servM1 +servM2 +":" +servS1 +servS2 +"   " +"Device Time :" +deviH1 +deviH2 +":" +deviM1 +deviM2 +":" +deviS1 +deviS2);



    if(servS2 >= deviS2 )
    {
        difS2 = servS2 - deviS2;
        if(servS1 >= deviS1 )
        {
            difS1 = servS1 - deviS1;
            if(servM2 >= deviM2)
            {
                difM2 = servM2 - deviM2;
                if(servM1 >= deviM1)
                {
                    difM1 = servM1 - deviM1;
                }
                else // M1
                {
                    difS1 = 6 - (deviS1 - servS1);
                    servM1 = servM1 - 1; 
                }
            }
            else //M2
            {
                difM2 = (servM2 - deviM2) + 10;
                servM1 = servM1 - 1;
                if(servM1 >= deviM1)
                {
                    difM1 = servM1 - deviM1;
                }
                else // M1
                {
                    difS1 = 6 - (deviS1 - servS1);
                    servM1 = servM1 - 1; 
                }
            }
        }
        else //s1
        {
            difS1 = 6 - (deviS1 - servS1);
            servM2 = servM2 - 1;
            if(servM2 >= deviM2)
            {
                difM2 = servM2 - deviM2;
                if(servM1 >= deviM1)
                {
                    difM1 = servM1 - deviM1;
                }
                else // M1
                {
                    difS1 = 6 - (deviS1 - servS1);
                    servM1 = servM1 - 1; 
                }
            }
            else //M2
            {
                difM2 = (servM2 - deviM2) + 10;
                servM1 = servM1 - 1;
                if(servM1 >= deviM1)
                {
                    difM1 = servM1 - deviM1;
                }
                else // M1
                {
                    difS1 = 6 - (deviS1 - servS1);
                    servM1 = servM1 - 1; 
                }
            }
        }    
    }
    else // S2
    {
        difS2 = (servS2 - deviS2) + 10;
        servS1 = servS1 - 1;
        if(servS1 >= deviS1 )
        {
            difS1 = servS1 - deviS1;
            if(servM2 >= deviM2)
            {
                difM2 = servM2 - deviM2;
                if(servM1 >= deviM1)
                {
                    difM1 = servM1 - deviM1;
                }
                else // M1
                {
                    difS1 = 6 - (deviS1 - servS1);
                    servM1 = servM1 - 1; 
                }
            }
            else //M2
            {
                difM2 = (servM2 - deviM2) + 10;
                servM1 = servM1 - 1;
                if(servM1 >= deviM1)
                {
                    difM1 = servM1 - deviM1;
                }
                else // M1
                {
                    difS1 = 6 - (deviS1 - servS1);
                    servM1 = servM1 - 1; 
                }
            }
        }
        else //S1
        {
            difS1 = 6 - (deviS1 - servS1);
            servM2 = servM2 - 1;
            if(servM2 >= deviM2)
            {
                difM2 = servM2 - deviM2;
                if(servM1 >= deviM1)
                {
                    difM1 = servM1 - deviM1;
                }
                else // M1
                {
                    difS1 = 6 - (deviS1 - servS1);
                    servM1 = servM1 - 1; 
                }
            }
            else //M2
            {
                difM2 = (servM2 - deviM2) + 10;
                servM1 = servM1 - 1;
                if(servM1 >= deviM1)
                {
                    difM1 = servM1 - deviM1;
                }
                else // M1
                {
                    difS1 = 6 - (deviS1 - servS1);
                    servM1 = servM1 - 1; 
                }
            }
        }
    }



    downlatency =  (difM1 * 600) + (difM2 * 60) + (difS1 * 10) + difS2 + 1   ; // **** -60s
    Train_down [0][num2] = downlatency;
    //console.log("downlatency = " +Train_down[0][num2] +" s");
}




////// Calculate Probability of Uplink Node  /////

var Uplinkcond = 36; 
var TimeVal = 0;

console.log("\n");
console.log("//// CPT Of Uplink Latency Node /////");

var traindataU = 0;
var truedataU = 0;


var cnt_U = 0; 
var cnt_nU = 0; 

var PU = 0 
var PnU = 0; 

var numU = 1;

traindataU = train_ratio * amt_uplink;
traindataU = parseInt(traindataU);


for(numU ; numU < traindataU; numU++)
{

    
    truedataU = numU + 1;
    ;
    if((Train_up[0][numU] >= Uplinkcond))
    {
        Train_up[1][numU] = "failed";
       
    }
    else
    {
        Train_up[1][numU] = "OK";
    }


    // Probability for Uplink //  >> PU
    if((Train_up[1][numU] == "failed" ))
    {
         
        cnt_U++;
         
    }
    
    PU = (cnt_U/truedataU);
    PU = PU.toFixed(4);
    PnU = (1 - PU);
    PnU = PnU.toFixed(4);


}
console.log("amount of uplink trainset : " +numU);
console.log("cnt_U : " +cnt_U);
console.log("P(U = yes) : " +PU);
console.log("P(U = no) : " +PnU);
///////////////////







// Calculate Probability of Downlink Node  //


var Downlinkcond = 42; // condition for failure in second, if more timecond it fail

//////////////////////////////////////////////////////////////////////////////////

console.log("\n");
console.log("//// CPT Of Downlink Latency Node /////");

var traindataD = 0;
var truedataD = 0;


var cnt_D = 0; 
var cnt_nD = 0; 

var PD = 0 
var PnD = 0;

var numD = 1;

traindataD = train_ratio * amt_downlink;
traindataD = parseInt(traindataD);


for(numD ; numD < traindataD; numD++)
{

    
    truedataD = numD + 1;
    
    if((Train_down[0][numD] >= Downlinkcond))
    {
        Train_down[1][numD] = "failed";
       
    }
    else
    {
        Train_down[1][numD] = "OK";
    }


    // Probability for Time failure //  >> PT
    if((Train_down[1][numD] == "failed" ))
    {
         
        cnt_D++;
         
    }
    
    PD = (cnt_D/truedataD);
    PD = PD.toFixed(4);
    PnD = (1 - PD);
    PnD = PnD.toFixed(4);


}
console.log("amount of downlink trainset : " +numD);
console.log("cnt_D : " +cnt_D);
console.log("P(D = yes) : " +PD);
console.log("P(D = no) : " +PnD);
///////////////////






///// Calculate CPT of Failure Node  /////
console.log("\n");
console.log("//// CPT Of Failure Node /////");
var traindataF = 0;
var truedataF = 0;

var cnt_u_d = 0;
var cnt_nu_d = 0;
var cnt_u_nd = 0;
var cnt_nu_nd = 0;

var P_F_U_D = 0 
var P_F_nU_D = 0;
var P_F_U_nD = 0;
var P_F_nU_nD = 0;


traindataF = amt_downlink;

var numF = 1;

for(numF ; numF < traindataF; numF++)
{
    
    truedataF = numF + 1;
    
    if((Train_up[0][numF] >= Uplinkcond) && (Train_down[0][numF] >= Downlinkcond))
    {
        cnt_u_d++
       
    }
    if((Train_up[0][numF] < Uplinkcond) && (Train_down[0][numF] >= Downlinkcond))
    {
        cnt_nu_d++
       
    }
    if((Train_up[0][numF] >= Uplinkcond) && (Train_down[0][numF] < Downlinkcond))
    {
        cnt_u_nd++
       
    }
    if((Train_up[0][numF] < Uplinkcond) && (Train_down[0][numF] < Downlinkcond))
    {
        cnt_nu_nd++
       
    }
    
    P_F_U_D = (cnt_u_d/truedataF);
    P_F_U_D = P_F_U_D.toFixed(4);

    P_F_nU_D = (cnt_nu_d/truedataF);
    P_F_nU_D = P_F_nU_D.toFixed(4);

    P_F_U_nD = (cnt_u_nd/truedataF);
    P_F_U_nD = P_F_U_nD.toFixed(4);

    P_F_nU_nD = (cnt_nu_nd/truedataF);
    P_F_nU_nD = P_F_nU_nD.toFixed(4);

}
console.log("amount of Failure dataset : "+numF);
console.log("P(F  = yes, U = yes, D = yes) : " +P_F_U_D);
console.log("P(F  = yes, U = no, D = yes) : " +P_F_nU_D);
console.log("P(F  = yes, U = yes, D = no) : " +P_F_U_nD);
console.log("P(F  = yes, U = no, D = no) : " +P_F_nU_nD);
///////////////////



///// Calculate Probability of failure For Training Model //////

console.log("////////////////// Failure in train model ///////////////////");

var PF = 0;

PF = (P_F_U_D * PD * PU) + (P_F_nU_D * PnU * PD) + (P_F_U_nD * PU * PnD) + (P_F_nU_nD * PnU * PnD)
console.log("P(F = yes) = "+PF);


var P_U_F = 0;
var P_D_F = 0;
console.log("\n");
console.log("Observed Evidence");
P_U_F = ((P_F_U_D * PD * PU) + (P_F_U_nD * PU * PnD))/PF
console.log("P(U = yes|F = yes) = "+P_U_F);

P_D_F = ((P_F_U_D * PD * PU) + (P_F_nU_D * PnU * PD))/PF
console.log("P(D = yes|F = yes) = "+P_D_F);

//////////////////





///// Test Model /////
console.log("\n");

console.log("////////////////// TEST MODEL ///////////////////");

////// Calculate Probability of Uplink Node  /////

console.log("\n");
console.log("//// CPT Of Uplink Latency Node of Test Model  /////");

var testdataU = 0;
var truedataUt = 0;


var cnt_Ut = 0; 
var cnt_nUt = 0; 

var PU_test = 0 
var PnU_test = 0; 

var numUt = 1;

testdataU = train_ratio * amt_uplink;
testdataU = parseInt(testdataU);

var numtestU = testdataU;

for(testdataU ; testdataU <= amt_uplink; testdataU++)
{

    
    truedataUt = testdataU + 1;
    
    if((Train_up[0][testdataU] >= Uplinkcond))
    {
        Train_up[1][testdataU] = "failed";
       
    }
    else
    {
        Train_up[1][testdataU] = "OK";
    }


    // Probability for Uplink //  >> PU
    if((Train_up[1][testdataU] == "failed" ))
    {
         
        cnt_Ut++;
         
    }
    
    PU_test = (cnt_Ut/(testdataU - numtestU ));
    PU_test = PU_test.toFixed(4);
    PnU_test = (1 - PU_test);
    PnU_test = PnU_test.toFixed(4);


}
console.log("amount of uplink testset : " +(testdataU - numtestU ));
console.log("cnt_U : " +cnt_Ut);
console.log("P(U = yes) : " +PU_test);
console.log("P(U = no) : " +PnU_test);
///////////////////




////// Calculate Probability of Downlink Node  /////


console.log("\n");
console.log("//// CPT Of Downlink Latency Node of Test Model  /////");



var testdataD = 0;
var truedataDt = 0;


var cnt_Dt = 0; 
var cnt_nDt = 0; 

var PD_test = 0 
var PnD_test = 0;

var numDt = 1;

testdataD = train_ratio * amt_downlink;
testdataD = parseInt(testdataD);

var numtestD = testdataD;

for(testdataD ; testdataD <= amt_downlink; testdataD++)
{

    
    truedataDt = testdataD + 1;
    
    if((Train_down[0][testdataD] >= Downlinkcond))
    {
        Train_down[1][testdataD] = "failed";
       
    }
    else
    {
        Train_down[1][testdataD] = "OK";
    }


    // Probability for Time failure //  >> PT
    if((Train_down[1][testdataD] == "failed" ))
    {
         
        cnt_Dt++;
         
    }
    
    PD_test = (cnt_Dt/(testdataD - numtestD ));
    PD_test = PD_test.toFixed(4);
    PnD_test = (1 - PD_test);
    PnD_test = PnD_test.toFixed(4);


}
console.log("amount of downlink testset : " +(testdataD - numtestD ));
console.log("cnt_Dt : " +cnt_Dt);
console.log("P(D = yes) : " +PD_test);
console.log("P(D = no) : " +PnD_test);
///////////////////




///// Calculate Probability of failure For Training Model //////

console.log("\n");
console.log("////////////////// Failure in test model ///////////////////");

var PF_test = 0;

PF_test = (P_F_U_D * PD_test * PU_test) + (P_F_nU_D * PnU_test * PD_test) + (P_F_U_nD * PU_test * PnD_test) + (P_F_nU_nD * PnU_test * PnD_test)
console.log("P(F = yes) = "+PF_test);

var P_U_F_test = 0;
var P_D_F_test = 0;
console.log("\n");
console.log("Observed Evidence");
P_U_F_test = ((P_F_U_D * PD_test * PU_test) + (P_F_U_nD * PU_test * PnD_test))/PF_test
console.log("P(T = yes|F = yes) = "+P_U_F_test);

P_D_F_test = ((P_F_U_D * PD_test * PU_test) + (P_F_nU_D * PnU_test * PD_test))/PF_test
console.log("P(S = yes|F = yes) = "+P_D_F_test);

//////////////////


console.log("\n");



///// Accuaracy of Model /////

// Define Confusion Matrix Variable 

var Tp = 0; // True Positive for low
var Tn = 0; // True Negative for low
var Fp = 0; // False Positive fow low
var Fn = 0; // False Negative for low

if(PF >= PF_test)// predict > actual
{
    Tp = PF_test; 
    Fn = 0;
}
else
{
    Tp = PF_test;
    Fn = (PF_test - PF)
}
console.log("Confusion Metric");
console.log("TP = " +Tp);
console.log("FN = " +Fn);


if((1 - PF) >= (1 - PF_test))
{
    Tn = (1 - PF_test);
    Fp = 0;
}
else
{
    Tn = (1 - PF);
    Fp = ((1 - PF_test) - (1 - PF));
}
console.log("FP = " +Fp);
console.log("TN = " +Tn);

console.log("\n");
// Define Variable of ACcuracy //
var Accuracy_l = 0;
var Precision_l = 0;
var Recall_l = 0;

Accuracy_l = (Tp+Tn)/(Tp+Tn+Fp+Fn);
Precision_l = Tp/(Tp + Fp);
Recall_l = Tp/(Tp + Fn);

console.log("Accuracy = " +Accuracy_l);
console.log("Precision = " +Precision_l);
console.log("Recall = " +Recall_l);

 