public class Solution {
    public string DefangIPaddr(string address) {
    //  return address.Replace("." , "[.]");
        string result = "";
    foreach(char ch in address){
        if(ch == '.'){
            result += "[.]";
        }
        else
        {
            result += ch;
        }
    }
        return result;
}
}