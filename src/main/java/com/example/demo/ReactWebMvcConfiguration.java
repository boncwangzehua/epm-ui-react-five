package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.bonc.epm.ui.spring.ReactTemplateConfig;
import com.bonc.epm.ui.spring.ReactTemplateConfigurer;
import com.bonc.epm.ui.spring.ReactTemplateViewResolver;

@Configuration
public class ReactWebMvcConfiguration extends WebMvcConfigurerAdapter {
	@Value("${render.engineName}")
	private String engineName;
    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        registry.viewResolver(new ReactTemplateViewResolver(engineName, "/static/views/", ".js"));
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
    }

    @Bean
    public ReactTemplateConfig reactConfigurer() {
        ReactTemplateConfigurer configurer = new ReactTemplateConfigurer();
        if("j2v8".equals(engineName)) {
        	configurer.setScripts(
                    "/frame/j2v8-polyfill.js",
                    "/static/bower_components/react/react.development.js",
                    "/static/bower_components/react/react-dom.development.js",
                    "/static/bower_components/react/react-dom-server.browser.development.js",
                    "/static/bower_components/epm-ui-react/dist/umd/epm-ui-react.bundle.js",
                    "/static/bower_components/epm-ui-react-graphics/dist/umd/epm-ui-react-graphics.bundle.nopolyfill.js",
                    "/static/components/components.js"
            );
            configurer.setRenderScrips(
                    "/frame/html.js",
                    "/frame/render.js"
            );
            configurer.setRenderFunction("render");
        }else if("static".equals(engineName)) {
        	configurer.setStaticTemplate("/static/index.html");
        }
        return configurer;
    }
}
