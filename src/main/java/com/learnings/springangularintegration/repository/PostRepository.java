package com.learnings.springangularintegration.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.learnings.springangularintegration.model.PostModel;

public interface PostRepository extends MongoRepository<PostModel, String>
{
}

//public interface ItemRepository extends MongoRepository<GroceryItem, String> {
//
//    @Query("{name:'?0'}")
//    GroceryItem findItemByName(String name);
//
//    @Query(value="{category:'?0'}", fields="{'name' : 1, 'quantity' : 1}")
//    List<GroceryItem> findAll(String category);
//
//    public long count();
//
//}
