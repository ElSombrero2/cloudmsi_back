app.directive('ngMethods',function(){
    return{
        restrict:'E',
        scope:{
            title:'=',
            data:'='
        },
        templateUrl:'/public/partials/_methods.html',
        link:function(scope,elem,attr){
            $('.collapsible').collapsible({
                accordion:false
            })
        }
    }
})