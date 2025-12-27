public class Solution {
    public string DefangIPaddr(string address) {
            StringBuilder result = new StringBuilder();

            foreach(char ch in address){
                if(ch == '.'){
                    result.Append("[.]");
                }else{
                    result.Append(ch);
                }
            }
            return result.ToString();
    }
}