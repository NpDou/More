require.config({
	// baseUrl:'js'


	paths:{
		'jquery':'../lib/jquery-3.2.1',
		'zoom':'../lib/jquery.douZoom/jquery.douZoom',
		'lunbo':'../lib/jquery.doulunbo/jquery.doulunbo',
		'conmon':'../lib/common',
	},

	shim:{
		// 设置依赖
		'zoom':['jquery'],
		'common':['jquery'],
		'lunbo':['jquery'],
	}
});
