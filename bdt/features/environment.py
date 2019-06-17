import logging
from behave import use_fixture
from behave.log_capture import capture
from fixtures.auth_server import auth_server

LOG = logging.getLogger('behave')

def before_all(context):
  context.config.setup_logging(configfile="behave_logging.ini")

def before_tag(context, tag):
  if tag == 'auth_server':
    LOG.info('will start auth server')
    use_fixture(auth_server, context)