// map.js
var c_id = ""
var width = ""
var height = ""

Page({
    data: {
	    markers: [{

	      id: 0,

	      latitude: 23.099994,

	      longitude: 113.324520,

	      width: 50,

	      height: 50

	    }]
    },
    regionchange(e) {

    	console.log(e.type)

    },
   markertap(e) {

	  	var that = this 

	    const canvasTop = wx.createCanvasContext('canvasTop')
	    canvasTop.setFillStyle('#f7f7f7')
	    canvasTop.fillRect(0,0,width*8,47)
	    canvasTop.draw()

	    const canvasBottom = wx.createCanvasContext('canvasBottom')
	    canvasBottom.setFillStyle('#ffffff')
	    canvasBottom.setShadow(0, 0, 5, '#000000')
	    canvasBottom.fillRect(0, 0, width*8, 127)
	    canvasBottom.draw()

	    const canvasText = wx.createCanvasContext('canvasText')
	    canvasText.setFontSize(width/2.5)
	    canvasText.setFillStyle('#666666')
	    canvasText.fillText('地图上的样式',20,30)

	    canvasText.setFillStyle('#353535')
	    canvasText.setFontSize(width/2.8)
	    canvasText.fillText('105米',width*8*0.08,81)

	    canvasText.setFillStyle('#888888')
	    canvasText.setFontSize(width/3.1)
	    canvasText.fillText('距离起始点',width*8*0.06,107)

	    canvasText.setFillStyle('#353535')
	    canvasText.setFontSize(width/2.8)
	    canvasText.fillText('5分钟',width*8*0.43,81);
	    canvasText.setFillStyle('#888888')
	    canvasText.setFontSize(width/3.1)
	    canvasText.fillText('步行可到达',width*8*0.39,107)

	    canvasText.setFillStyle('#353535')
	    canvasText.setFontSize(width/3.3)
	    canvasText.fillText('可借:',width*8*0.76,83)

	    canvasText.setFillStyle('#41C2D5')
	    canvasText.setFontSize(width/3.3)
	    canvasText.fillText(28,width*8*0.88,83);


	    canvasText.setFillStyle('#353535')
	    canvasText.setFontSize(width/3.3)

	    canvasText.fillText('可还:',width*8*0.76,105)

	    canvasText.setFillStyle('#F36268')
	    canvasText.setFontSize(width/3.3)
	    canvasText.fillText(12,width*8*0.88,105)

	    canvasText.draw()
	    that.setData({
	        hide_type:'block'
	    })

    },
    onLoad:function(){

  	    wx.getSystemInfo({

            success: function(res) {

	            width  = res.windowWidth/8

	            height = res.windowWidth/8

	        }

	    })
    }
})
