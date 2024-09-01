package com.sample.category;

import com.sample.category.config.AsyncSyncConfiguration;
import com.sample.category.config.EmbeddedSQL;
import com.sample.category.config.JacksonConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { CategoryApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class })
@EmbeddedSQL
public @interface IntegrationTest {
}
