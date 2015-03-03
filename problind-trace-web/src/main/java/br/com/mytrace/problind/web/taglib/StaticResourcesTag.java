package br.com.mytrace.problind.web.taglib;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import br.com.mytrace.problind.trace.core.util.EnviromentConfigs;

public class StaticResourcesTag extends TagSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = 18156860690385003L;

	private static final Logger LOG = Logger
			.getLogger(StaticResourcesTag.class);

	@Autowired
	private EnviromentConfigs configs;

	@Override
	public int doStartTag() throws JspException {
		try {
			if (configs == null) {

				SpringBeanAutowiringSupport
						.processInjectionBasedOnServletContext(this,
								pageContext.getServletContext());
			}

			JspWriter out = pageContext.getOut();
			out.print(configs.getStaticUrl());
		} catch (Exception e) {
			LOG.error("Ocorreu um erro no processamento da taglib de menu.", e);
			throw new JspException("Error: " + e.getMessage());
		}
		return SKIP_BODY;
	}
}
