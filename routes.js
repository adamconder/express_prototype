module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {

      res.render('tfc/index',
                {'assetPath' : assetPath});

    });

    app.get('/apply', function (req, res) {

      res.render('tfc/apply/apply',
                {'assetPath' : assetPath});

    });

    app.post('/apply', function (req, res) {

      res.render('tfc/apply',
                {'assetPath' : assetPath});

    });

// children decleration
    app.post('/children', function (req, res) {

      res.render('tfc/apply/children',
                {'assetPath' : assetPath});

    });

    // personal details
    app.get('/personal-details', function (req, res) {

      res.render('tfc/apply/personal-details',
                {'assetPath' : assetPath});

    });

    // renewing
    app.get('/renew', function (req, res) {

      res.render('tfc/renew', {'assetPath' : assetPath });
    });

    /* Samples */

    app.get('/sample', function (req, res) {

      res.render('sample',
                {'assetPath' : assetPath});
    });

    /* Example pages */

    app.get('/examples/template-partial-areas', function (req, res) {

      res.render('examples/template_partial_areas',
                {'assetPath' : assetPath});

    });

    /* Elements pages */

    app.get('/examples/elements/intro', function (req, res) {
      res.render('examples/elements/intro', {'assetPath' : assetPath });
    });

    app.get('/examples/elements/grid-layout', function (req, res) {
      res.render('examples/elements/grid_layout', {'assetPath' : assetPath });
    });

    app.get('/examples/elements/typography', function (req, res) {
      res.render('examples/elements/typography', {'assetPath' : assetPath });
    });

    app.get('/examples/elements/forms', function (req, res) {
      res.render('examples/elements/forms', {'assetPath' : assetPath });
    });

  }
};
