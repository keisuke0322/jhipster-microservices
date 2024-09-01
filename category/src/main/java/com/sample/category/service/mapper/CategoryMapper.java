package com.sample.category.service.mapper;

import com.sample.category.domain.Category;
import com.sample.category.service.dto.CategoryDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Category} and its DTO {@link CategoryDTO}.
 */
@Mapper(componentModel = "spring")
public interface CategoryMapper extends EntityMapper<CategoryDTO, Category> {}
