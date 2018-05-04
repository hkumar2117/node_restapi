
var db=require('./dbconnection');
var MerchantData={
   getPerformanceScore:function(merchant,callback){
  		return db.query("Select rma,sla,qtos,score from cscart_merchant_score where company_id=? order by id desc limit 1",[merchant],callback);
   },
   getMechantReturn:function(merchant,callback){
        return db.query("SELECT count(order_id) as order_return FROM cscart_orders where status in ('F','N','D','T') and company_id=?",[merchant],callback);
   },
   getMerchantDetails:function(merchant,callback){
   	    return db.query("SELECT * from cscart_companies where company_id=?",[merchant],callback); 
   }

};
 module.exports=MerchantData;