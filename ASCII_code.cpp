#include<iostream>
using namespace std;
int main(){
	int inputNum,num1,num2,num3,num4,answer;
	
	cout<<"ENTER A FOUR DIGIT NUMBER : ";
	cin>>inputNum;
	if(inputNum>1000 && inputNum<9999){
		num1 = inputNum%10;
		inputNum = inputNum/10;
		num2 = inputNum%10;
		inputNum = inputNum/10;
		num3 = inputNum%10;
		inputNum = inputNum/10;
		num4 = inputNum%10;
		cout<<num1<<num2<<num3<<num4;
		
}	else{
		cout<<"ENTER A VALID NUMBER";
	}
	return 0;
}