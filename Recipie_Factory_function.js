function recipeFactory(name, ingredients, steps) {
  var recipe = {};
  
  recipe.name = name;
  
  recipe.ingredients = ingredients;
  recipe.steps = steps.sort(compare);
  
  recipe.stepsHtml = function() {
    var mySteps = "<ol>"
    steps.forEach(function(step) {
      mySteps += "<li>" + step + "</li>";
    });
    mySteps += "</ol>";
    return mySteps;
  }
  
  recipe.ingredientsHtml = function() {
    return ingredients.join(', ');
  }
  
  
  return recipe;
}

function compare(a, b) {
  return a - b;
}

// tests

function testRecipeFactory() {  
  var grilledCheese = recipeFactory(
    'grilled cheese',
    ['2 slices bread', 'butter', '1 slice cheese'],
    ['Butter bread', 'Put cheese between bread', 'Toast bread on stove']
  ); 
  if (grilledCheese) {
    // `$` is a shortcut to the jQuery library, which
    // you'll learn about in the next unit.
    // Here, we're using jQuery to update elements in the HTML
    $('.js-recipe-name').text(grilledCheese.name);
    $('.js-ingredients').html(grilledCheese.ingredientsHtml());
    $('.js-steps').html(grilledCheese.stepsHtml());
  }
}

testRecipeFactory()