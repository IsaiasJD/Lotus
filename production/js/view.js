(function(e){"use strict";e("#defaultForm:not([data-type=advanced])").validate({submitHandler:function(s){var t=e(s),o=e("#contactSuccess"),a=e("#contactError"),n=e(this.submitButton);n.button("loading"),e.ajax({type:"POST",url:t.attr("action"),data:{name:t.find("#name").val(),email:t.find("#email").val(),subject:t.find("#subject").val(),message:t.find("#message").val()},dataType:"json",complete:function(s){if("object"==typeof s.responseJSON&&"success"==s.responseJSON.response)return o.removeClass("hidden"),a.addClass("hidden"),t.find(".form-control").val("").blur().parent().removeClass("has-success").removeClass("has-error").find("label.error").remove(),o.offset().top-80<e(window).scrollTop()&&e("html, body").animate({scrollTop:o.offset().top-80},300),void n.button("reset");a.removeClass("hidden"),o.addClass("hidden"),a.offset().top-80<e(window).scrollTop()&&e("html, body").animate({scrollTop:a.offset().top-80},300),t.find(".has-success").removeClass("has-success"),n.button("reset")}})}})}).apply(this,[jQuery]);