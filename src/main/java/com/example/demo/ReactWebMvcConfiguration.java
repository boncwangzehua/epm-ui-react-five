package com.example.demo;

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

    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        registry.viewResolver(new ReactTemplateViewResolver("/static/views/", ".js"));
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
    }

    @Bean
    public ReactTemplateConfig reactConfigurer() {
        ReactTemplateConfigurer configurer = new ReactTemplateConfigurer();
        configurer.setScripts(
                "/frame/j2v8-polyfill.js",
                "/static/bower_components/react/react.js",
                "/static/bower_components/react/react-dom-server.js",
                "/static/bower_components/epm-ui-react/dist/umd/epm-ui-react.bundle.js",
                "/static/components/components.js"
        );
        configurer.setRenderScrips(
                "/frame/html.js",
                "/frame/render.js"
        );
        configurer.setRenderFunction("render");
        return configurer;
    }
}
