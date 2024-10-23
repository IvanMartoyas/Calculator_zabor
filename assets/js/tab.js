// jQuery
const tab_option = {
    id_tab: '#tabs-wrapper',
    // colors: {
    //     accent1: '#006f3e',
    //     accent2: '#212529',
    //     accent3: '#f5f6f6',
    //     accent4: '#f2f2f2',
    // } 
}

$(tab_option.id_tab).each(function() {
	let ths = $(this);
	ths.find('.tab-item').not(':first').hide();
	ths.find('.tab').click(function() {
		ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});


let flag_menu = false;
$('.tabMenu__button').click(function(){
    if(!flag_menu) { 
        $('.tabMenu').addClass('tabMenu--active');
        $(this).addClass('tabMenu__button--active');
        console.log("$('.tabMenu') ",$('.tabMenu'))
        flag_menu = true;
        
    } else {
        $(this).removeClass('tabMenu__button--active');
        $('.tabMenu').removeClass('tabMenu--active');
        flag_menu = false;
    }
    
 
})